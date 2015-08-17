'use strict';

module.exports = {
	options: {
		base: '<%= config.prod %>',
		branch: 'gh-pages',
		// branch: 'master',
		clone: '.tmp/deploy/repo',
		repo: 'https://github.com/habaneroconsulting/habanero-prototype-boilerplate.git'
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
