'use strict';

module.exports = {
	test: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.less',
					'!**/_*.less',
					'!_**/*'
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
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.less',
					'!**/_*.less',
					'!_**/*'
				],
				dest: '.tmp/less/styles/',
				ext: '.css'
			}
		]
	}
};