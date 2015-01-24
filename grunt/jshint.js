'use strict';

module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	all: {
		src: [
			'<%= config.src %>/**/*.js',
			'!<%= config.src %>/**/vendor/**/*.js',
			'!**/*.min.js'
		]
	}
};