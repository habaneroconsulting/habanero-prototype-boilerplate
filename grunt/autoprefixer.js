'use strict';

module.exports = {
	options: {
		map: true
	},
	test: {
		files: [
			{
				expand: true,
				cwd: '<%= config.test %>/styles/',
				src: [
					'**/*.css',
					'!vendor/**/*.css'
				],
				dest: '<%= config.test %>/styles/',
				ext: '.css'
			}
		]
	},
	prod: {
		files: [
			{
				expand: true,
				cwd: '.tmp/less/styles/',
				src: [
					'**/*.css',
					'!vendor/**/*.css'
				],
				dest: '.tmp/less/styles/',
				ext: '.css'
			}
		]
	}
};
