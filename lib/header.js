'use strict';

module.exports = require('./Extractor')({
	html		: /<h[^>]+>(.*?)<\/h[^>]+>/i,
	// @notes:
	// this would not get the first header if it's not preceeded by a new line
	// the following one would, but would also capture # within content
	markdown: /\n(?:#+\s*)(.*)/gi,
	//markdown: /(?:#+\s*)(.*)/gi,
});
