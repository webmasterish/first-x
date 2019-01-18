# First x

> Utility to extract the content of the first occurence of element x from HTML or Markdown

[![Build Status](https://img.shields.io/travis/webmasterish/first-x/master.svg?style=flat-square)](https://travis-ci.org/webmasterish/first-x)
[![npm version](https://img.shields.io/npm/v/first-x.svg?style=flat-square)](http://npm.im/first-x)
[![Greenkeeper badge](https://badges.greenkeeper.io/webmasterish/first-x.svg?style=flat-square)](https://greenkeeper.io/)
[![MIT License](https://img.shields.io/npm/l/express.svg?style=flat-square)](http://opensource.org/licenses/MIT)


## Install


```sh
$ npm install first-x

# or

$ yarn add -D first-x
```


## Usage


The following `HTML` and `markdown` elements/syntaxt are supported 
using relevant functions:

- `HTML` header tags (`h1`, `h2`, `h3`, etc...) and their `markdown` counterparts
- `HTML` image tag (`img`) and it's `markdown` counterpart
- `HTML` paragraph tag (`p`) and it's `markdown` counterpart
- `HTML` blockquote tag (`blockquote`) and it's `markdown` counterpart


All supported elements/syntaxt have the following functions available:

- `from_any` - extracts content from first found occurence regardless of syntax
- `from_html` - exclusively checks `html`
- `from_md` (alias of `from_markdown`) - exclusively checks `markdown`

More details in [`Extractor class`](lib/Extractor.js).


```js
const FIRST = require('first-x');

// -----------------------------------------------------------------------------

// get first header text from some content

const title = FIRST.header.from_any( content );

// -----------------------------------------------------------------------------

// extract paragraph content exclusively from markdown

const description = FIRST.p.from_md( content );

// -----------------------------------------------------------------------------

// extract image url exclusively from html

const img_url = FIRST.img.from_html( content );

// -----------------------------------------------------------------------------

// get first found blockquote content

const quote = FIRST.blockquote.from_any( content );

```

## License

MIT © [webmasterish](https://webmasterish.com)
