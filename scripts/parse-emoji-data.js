'use strict';

const fs = require('fs');
const path = require('path');
const jsesc = require('jsesc');
const range = require('lodash.range');

const ROOT = path.resolve(__dirname, '..');

// Collect an array of strings; one for each emoji. Note that this cannot be
// passed to Regenerate directly, as each string might contain multiple code
// points.
const symbols = [];

// Collect an array of numbers (in case the emoji consists of a single code
// point) or nested arrays of numbers (in case the emoji consists of multiple
// code points). Note that this still cannot be used with Regenerate directly,
// as it treats each code point as an individual item (by design).
const codePoints = [];

const hex2dec = function(string) {
	// Turn a string representing a code point such as `'0023'` into the
	// corresponding number, e.g. `0x23`.
	return parseInt(string, 16);
};

const source = fs.readFileSync(ROOT + '/data/emoji-data.txt', 'utf-8');

const lines = source.split('\n');
lines.forEach(function(line) {
	if (!line || /^#/.test(line)) {
		return;
	}
	const data = line.trim().split(';');
	const codePointsColumn = data[0].trim();
	if (codePointsColumn.includes('..')) {
		const parts = codePointsColumn.split('..');
		const start = hex2dec(parts[0]);
		const end = hex2dec(parts[1]);
		for (const codePoint of range(start, end + 1)) {
			codePoints.push(codePoint);
			symbols.push(String.fromCodePoint(codePoint));
		}
	}
	const currentCodePoints = data[0].trim().split(' ').map(hex2dec);
	if (currentCodePoints.length == 1) {
		codePoints.push(currentCodePoints[0]);
		symbols.push(String.fromCodePoint(currentCodePoints[0]));
	} else {
		codePoints.push(currentCodePoints);
		symbols.push(String.fromCodePoint.apply(null, currentCodePoints));
	}
});

function writeFile(fileName, object) {
	fs.writeFileSync(
		ROOT + '/' + fileName,
		'module.exports = ' + jsesc(object, {
			'compact': false
		}) + ';\n'
	);
}

writeFile('symbols.js', symbols);
writeFile('code-points.js', codePoints);
