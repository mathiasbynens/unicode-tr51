var fs = require('fs');
var path = require('path');
var jsesc = require('jsesc');
require('string.fromcodepoint');

var ROOT = path.resolve(__dirname, '..');

// Collect an array of strings; one for each emoji. Note that this cannot be
// passed to Regenerate directly, as each string might contain multiple code
// points.
var symbols = [];

// Collect an array of numbers (in case the emoji consists of a single code
// point) or nested arrays of numbers (in case the emoji consists of multiple
// code points). Note that this still cannot be used with Regenerate directly,
// as it treats each code point as an individual item (by design).
var codePoints = [];

var source = fs.readFileSync(ROOT + '/data/emoji-data.txt', 'utf-8');

var lines = source.split('\n');
lines.forEach(function(line) {
	if (!line || /^#/.test(line)) {
		return;
	}
	var data = line.trim().split(';');
	if (data[1].trim() != 'emoji') {
		return;
	}
	var currentCodePoints = data[0].trim().split(' ').map(function(string) {
		// Turn a string representing a code point such as `'U+0023'` into the
		// corresponding number, e.g. `0x23`.
		return parseInt(string.slice(2), 16);
	});
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
