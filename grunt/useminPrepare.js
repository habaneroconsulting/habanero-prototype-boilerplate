'use strict';

module.exports = {
	html: '<%= config.prod %>/index.html',
	options: {
		dest: '<%= config.prod %>'
	}
};