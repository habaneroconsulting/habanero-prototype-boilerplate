'use strict';

module.exports = {
	all: {
		src: [
			'<%= config.src %>/**/*.js',
			'!<%= config.src %>/**/vendor/**/*.js',
			'!**/*.min.js'
		]
	}
};