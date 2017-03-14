# unicode-tr51 [![Build status](https://travis-ci.org/mathiasbynens/unicode-tr51.svg?branch=master)](https://travis-ci.org/mathiasbynens/unicode-tr51) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/unicode-tr51/master.svg)](https://coveralls.io/r/mathiasbynens/unicode-tr51) [![Dependency status](https://gemnasium.com/mathiasbynens/unicode-tr51.svg)](https://gemnasium.com/mathiasbynens/unicode-tr51)

_unicode-tr51_ contains data extracted from [the `emoji-data.txt` file](http://unicode.org/Public/emoji/latest/emoji-data.txt) that is part of [Unicode Technical Report #51](http://unicode.org/reports/tr51/).

This package enables an easy way of getting the list of all emoji code points in your JavaScript build scripts.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install unicode-tr51
```

In [Node.js](https://nodejs.org/):

```js
const properties = require('unicode-tr51');
// → [ 'Emoji', 'Emoji_Component', Emoji_Modifier', 'Emoji_Modifier_Base', 'Emoji_Presentation' ]
const Emoji = require('unicode-tr51/Emoji.js');
const Emoji_Component = require('unicode-tr51/Emoji_Component.js');
const Emoji_Modifier = require('unicode-tr51/Emoji_Modifier.js');
const Emoji_Modifier_Base = require('unicode-tr51/Emoji_Modifier_Base.js');
const Emoji_Presentation = require('unicode-tr51/Emoji_Presentation.js');
// A list of all emoji sequences is available as an array of strings:
const sequences = require('unicode-tr51/sequences.js');
// Note that the sequence properties (e.g. `Emoji_Flag_Sequence`) aren’t (yet) exposed individually.
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-tr51_ is available under the [MIT](https://mths.be/mit) license.
