'use strict';

const fs = require('fs');
const jsesc = require('jsesc');

const range = function(start, stop) {
	// inclusive, e.g. `range(1, 3)` → `[1, 2, 3]`
	const result = [];
	for (; start <= stop; result.push(start++));
	return result;
};

const append = function(map, key, value) {
	if (map.has(key)) {
		map.get(key).push(value);
	} else {
		map.set(key, [value]);
	}
};

const parseEmojiData = function() {
	const map = new Map();
	const source = fs.readFileSync('data/emoji-data.txt', 'utf8');
	if (!source) {
		return;
	}
	const lines = source.split('\n');
	for (const line of lines) {
		if (!line || /^#/.test(line)) {
			continue;
		}
		const data = line.trim().split(';');
		const charRange = data[0].replace('..', '-').trim();
		const rangeParts = charRange.split('-');
		const value = data[1].split('#')[0].trim();
		if (rangeParts.length == 2) {
			range(
				parseInt(rangeParts[0], 16),
				parseInt(rangeParts[1], 16)
			).forEach(function(codePoint) {
				append(map, value, codePoint);
			});
		} else {
			const codePoint = parseInt(charRange, 16);
			append(map, value, codePoint);
		}
	}
	return map;
};

const map = parseEmojiData();

const writeData = function(fileName, data) {
	fs.writeFileSync(
		fileName,
		`module.exports = ` + jsesc(data, {
			'compact': false,
			'numbers': 'hexadecimal',
			'wrap': true
		}) + `;\n`
	);
};

for (const [propertyName, codePoints] of map.entries()) {
	writeData(`./${ propertyName }.js`, codePoints);
}

const properties = [...map.keys()];
writeData('./index.js', properties);

const downloadCommand = require('../package.json').scripts.download;
const version = downloadCommand.match(/\/emoji\/([^\/]+)\/emoji-data.txt/)[1];
writeData('./emoji-version.js', version);
