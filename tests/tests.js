const assert = require('assert');

const Emoji = require('../Emoji.js');
const Emoji_Modifier = require('../Emoji_Modifier.js');
const Emoji_Modifier_Base = require('../Emoji_Modifier_Base.js');
const Emoji_Presentation = require('../Emoji_Presentation.js');
const sequences = require('../sequences.js');

describe('Emoji data', function() {
	it('contains expected code points', function() {

		assert(Emoji.includes(0x1F198));
		assert(Emoji.includes(0x1F9DD));
		assert(Emoji_Modifier.includes(0x1F3FD));
		assert(Emoji_Modifier_Base.includes(0x1F3C3));
		assert(Emoji_Presentation.includes(0x1F367));
		// Test a regular sequence (`emoji-sequences.txt`).
		assert(sequences.includes('\u{1F9DC}\u{1F3FB}'));
		// Test a ZWJ sequence (`emoji-zwj-sequences.txt`).
		assert(sequences.includes('\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F'));

	});
});
