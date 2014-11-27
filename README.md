# unicode-tr51 [![Build status](https://travis-ci.org/mathiasbynens/unicode-tr51.svg?branch=master)](https://travis-ci.org/mathiasbynens/unicode-tr51) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/unicode-tr51/master.svg)](https://coveralls.io/r/mathiasbynens/unicode-tr51) [![Dependency status](https://gemnasium.com/mathiasbynens/unicode-tr51.svg)](https://gemnasium.com/mathiasbynens/unicode-tr51)

_unicode-tr51_ contains data extracted from [the `emoji-data.txt` file](http://www.unicode.org/reports/tr51/emoji-data.txt) that is part of [Unicode Technical Report #51](http://www.unicode.org/reports/tr51/). Specifically, the data lists all emoji symbols that lack a text equivalent.

This package enables an easy way of getting the list of all emoji symbols (in string or code point format) in your JavaScript build scripts.

## Installation

Via [npm](https://www.npmjs.org/):

```bash
npm install unicode-tr51
```

In [Node.js](https://nodejs.org/):

```js
var emojiCodePoints = require('unicode-tr51/code-points');
var emojiSymbols = require('unicode-tr51/symbols');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-tr51_ is available under the [MIT](https://mths.be/mit) license.
