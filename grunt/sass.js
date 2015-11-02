'use strict';

module.exports = {
	build: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.scss',
					'!**/_*.scss',
					'!_**/*'
				],
				dest: '<%= config.build %>/styles/',
				ext: '.css'
			}
		]
	},
	production: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.scss',
					'!**/_*.scss',
					'!_**/*'
				],
				dest: '.tmp/scss/styles/',
				ext: '.css'
			}
		]
	}
};