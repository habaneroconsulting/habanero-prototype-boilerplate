'use strict';

module.exports = {
	options: {
		open: true
	},
	build: {
		options: {
			base: '<%= config.build %>',
			hostname: 'localhost',
			livereload: true,
			port: 9000
		}
	},
	production: {
		options: {
			base: '<%= config.production %>',
			keepalive: true
		}
	}
};