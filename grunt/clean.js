'use strict';

module.exports = {
	test: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= config.test %>/*',
				'!<%= config.test %>/.git*'
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