'use strict';

module.exports = require('./Extractor')({
	html		: /<img.*?src=['"](.*?)['"]/i,
	markdown: /!\[.*?\]\((.*?)\)/i,
});
