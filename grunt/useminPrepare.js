'use strict';

module.exports = {
	options: {
		dest: '<%= config.production %>',
		flow: {
			html: {
				steps: {
					js: ['uglifyjs', 'concat'],
					css: ['cssmin', 'concat']
				},
				post: {}
			}
		}
	},
	html: '<%= config.production %>/index.html'
};
