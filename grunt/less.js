'use strict';

module.exports = {
	build: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.less',
					'!**/_*.less',
					'!_**/*'
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