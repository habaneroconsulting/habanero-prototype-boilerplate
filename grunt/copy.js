'use strict';

module.exports = {
	test: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.test %>',
			src: [
				'**/*.html',
				'*.{ico,png,txt}',
				'images/**/*',
				'styles/fonts/**/*.*',
				'scripts/data/**/*.*',
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
				'scripts/data/**/*.*',
				'scripts/**/*.*'
			]
		}]
	},
	js: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.test %>',
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
			dest: '<%= config.test %>',
			src: [
				'**/*.html'
			]
		}]
	}
};