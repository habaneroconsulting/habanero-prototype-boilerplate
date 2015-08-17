'use strict';

module.exports = {
	options: {
		base: '<%= config.production %>',
		branch: 'gh-pages',
		// branch: 'master',
		clone: '.tmp/deploy/repo',
		repo: '<%= config.repo %>'
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
