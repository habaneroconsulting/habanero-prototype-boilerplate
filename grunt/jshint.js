'use strict';

module.exports = {
	options: {
		jshintrc: 'node_modules/habanero-code-style/js/.jshintrc'
	},
	all: {
		src: [
			'<%= config.src %>/**/*.js',
			'!<%= config.src %>/**/vendor/**/*.js',
			'!**/*.min.js'
		]
	}
};