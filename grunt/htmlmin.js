'use strict';

module.exports = {
	production: {
		options: {
			minifyCSS: false,
			minifyJS: true,
			removeComments: true,
			collapseWhitespace: true
		},
		files: [
			{
				expand: true,
				cwd: '<%= config.production %>',
				src: ['**/*.html'],
				dest: '<%= config.production %>'
			}
		]
	}
};
