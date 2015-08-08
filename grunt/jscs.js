'use strict';

module.exports = {
	options: {
		config: 'node_modules/habanero-code-style/js/.jscsrc'
	},
	all: {
		src: [
			'./gruntfile.js',
			'./grunt/**/*.js',
			'<%= config.src %>/scripts/**/*.js',
			'!<%= config.src %>/scripts/vendor/**/*.js',
			'!**/*.min.js'
		]
	}
};
