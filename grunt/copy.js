'use strict';

module.exports = {
	build: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.build %>',
			src: [
				'**/*.html',
				'*.{config,ico,png,txt,xml}',
				'images/**/*',
				'styles/fonts/**/*.*',
				'styles/vendor/**/*.css',
				'scripts/**/*.*'
			]
		}]
	},
	prod: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.prod %>',
			src: [
				'*.{config,ico,png,txt,xml}',
				'images/**/*',
				'styles/fonts/**/*.*',
				'styles/vendor/**/*.css',
				'scripts/**/*.*'
			]
		}]
	},
	js: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.build %>',
			src: [
				'scripts/**/*.*'
			]
		}]
	},
	html: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.build %>',
			src: [
				'**/*.html'
			]
		}]
	}
};