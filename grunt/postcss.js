'use strict';

module.exports = {
	build: {
		options: {
			map: true,
			processors: [
				require('pixrem')(),
				require('autoprefixer')({ browsers: '> 1%' })
			]
		},
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
	production: {
		options: {
			processors: [
				require('pixrem')(),
				require('autoprefixer')({ browsers: '> 1%' }),
				require('cssnano')()
			]
		},
		files: [
			{
				expand: true,
				cwd: '.tmp/scss/styles/',
				src: [
					'**/*.css',
					'!vendor/**/*.css'
				],
				dest: '.tmp/scss/styles/',
				ext: '.css'
			}
		]
	}
};
