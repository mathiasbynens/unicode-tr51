const assert = require('assert');

const Emoji = require('../Emoji.js');
const Emoji_Modifier = require('../Emoji_Modifier.js');
const Emoji_Modifier_Base = require('../Emoji_Modifier_Base.js');
const Emoji_Presentation = require('../Emoji_Presentation.js');

// Use `indexOf` instead of `includes` to make tests runnable in Node.js v4.
describe('Emoji data', function() {
	it('contains expected code points', function() {

		assert(Emoji.indexOf(0x1F198) > -1);
		assert(Emoji_Modifier.indexOf(0x1F3FD) > -1);
		assert(Emoji_Modifier_Base.indexOf(0x1F3C3) > -1);
		assert(Emoji_Presentation.indexOf(0x1F367) > -1);

	});
});
