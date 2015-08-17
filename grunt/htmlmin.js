'use strict';

module.exports = {
	production: {
		options: {
			minifyCSS: true,
			minifyJS: true,
			removeComments: true,
			collapseWhitespace: true
		},
		files: [
			{
				expand: true,
				cwd: '<%= config.prod %>',
				src: ['**/*.html'],
				dest: '<%= config.prod %>'
			}
		]
	}
};
