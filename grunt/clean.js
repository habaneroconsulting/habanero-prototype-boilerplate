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
	production: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= config.production %>/*',
				'!<%= config.production %>/.git*'
			]
		}]
	},
	server: '.tmp'
};
