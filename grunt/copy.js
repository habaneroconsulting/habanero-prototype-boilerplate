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
				'*.{ico,png,txt}',
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
				'*.{ico,png,txt}',
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