'use strict';

var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt, options) {
	var config = require('./config.js');

	return {
		options: {
			open: true
		},
		build: {
			options: {
				middleware: function (connect) {
					return [
						mountFolder(connect, config.build)
					];
				},
				hostname: 'localhost',
				livereload: true,
				port: 9000
			}
		},
		prod: {
			options: {
				keepalive: true,
				middleware: function (connect) {
					return [
						mountFolder(connect, config.prod)
					];
				}
			}
		}
	};
};
