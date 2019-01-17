'use strict';

module.exports = require('./Extractor')({
	html		: /<blockquote(?:.*?)>(.*?)<\/blockquote>/i,
	markdown: /\n(?:&gt;|\>)(.*)/gi,
});
