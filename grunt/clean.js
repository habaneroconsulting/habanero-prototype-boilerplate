'use strict';

module.exports = {
	build: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= config.build %>/*',
				'!<%= config.build %>/.git*'
			]
		}]
	},
	prod: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= config.prod %>/*',
				'!<%= config.prod %>/.git*'
			]
		}]
	},
	server: '.tmp'
};
