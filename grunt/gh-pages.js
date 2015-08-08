'use strict';

module.exports = {
	options: {
		base: '<%= config.prod %>',
		clone: '.tmp/grunt-gh-pages/gh-pages/repo'
	},
	src: [
		'**/*',
		'!.tmp/**/*',
		'!bower_components/**/*',
		'!build/**/*',
		'!node_modules/**/*',
		'!source/**/*'
	]
};
