var assert = require('assert');
var emojiCodePoints = require('../code-points');
var emojiSymbols = require('../symbols');

describe('Emoji data', function() {
	it('contains expected code points', function() {

		// U+1F198 SQUARED SOS
		assert(emojiCodePoints.indexOf(0x1F198) >= 0);
		assert(emojiSymbols.indexOf('\uD83C\uDD98') >= 0);

		// U+1F1FE REGIONAL INDICATOR SYMBOL LETTER Y
		// U+1F1EA REGIONAL INDICATOR SYMBOL LETTER E
		// → flag for Yemen
		assert(emojiCodePoints.some(function(value) {
			return Array.isArray(value) &&
				value[0] == 0x1F1FE &&
				value[1] == 0x1F1EA;
		}));
		assert(emojiSymbols.indexOf('\uD83C\uDDFE\uD83C\uDDEA') >= 0);

		// U+1F1FA REGIONAL INDICATOR SYMBOL LETTER U
		// U+1F1F8 REGIONAL INDICATOR SYMBOL LETTER S
		// → flag for United States
		assert(emojiCodePoints.some(function(value) {
			return Array.isArray(value) &&
				value[0] == 0x1F1FA &&
				value[1] == 0x1F1F8;
		}));
		assert(emojiSymbols.indexOf('\uD83C\uDDFA\uD83C\uDDF8') >= 0);

		// Check emoji that have a textual representation by default.
		// U+0031 DIGIT ONE
		// U+20E3 COMBINING ENCLOSING KEYCAP
		assert(emojiCodePoints.some(function(value) {
			return Array.isArray(value) &&
				value[0] == 0x0031 &&
				value[1] == 0x20E3;
		}));
		assert(emojiSymbols.indexOf('1\u20E3') >= 0);

	});

});
