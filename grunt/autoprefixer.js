'use strict';

module.exports = {
	options: {
		map: true
	},
	build: {
		files: [
			{
				expand: true,
				cwd: '<%= config.build %>/styles/',
				src: [
					'**/*.css',
					'!vendor/**/*.css'
				],
				dest: '<%= config.build %>/styles/',
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
