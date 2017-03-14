'use strict';

const fs = require('fs');
const jsesc = require('jsesc');

const parseEmojiSequences = function() {
	const sequences = [];
	const source = fs.readFileSync('data/emoji-sequences.txt', 'utf8');
	if (!source) {
		return;
	}
	const lines = source.split('\n');
	for (const line of lines) {
		if (!line || /^#/.test(line)) {
			continue;
		}
		const data = line.trim().split(';');
		const sequence = data[0].trim();
		const parts = sequence.split(' ').map(part => {
			const codePoint = parseInt(part.trim(), 16);
			return String.fromCodePoint(codePoint);
		});
		sequences.push(parts.join(''));
	}
	return sequences;
};

const sequences = parseEmojiSequences();

const writeData = function(fileName, data) {
	fs.writeFileSync(
		fileName,
		`module.exports = ` + jsesc(data, {
			'compact': false,
			'es6': false
		}) + `;\n`
	);
};

writeData(`./sequences.js`, sequences);
