'use strict';

module.exports = {
	html: '<%= config.prod %>/index.html',
	options: {
		dest: '<%= config.prod %>',
		flow: {
			html: {
				steps: {
					js: ['uglifyjs', 'concat'],
					css: ['cssmin', 'concat']
				},
				post: {}
			}
		}
	}
};
