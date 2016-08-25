'use strict';

const gulp = require('gulp');
const config = require('./gulp/config');
const clean = require('./gulp/clean');
const jscs = require('./gulp/jscs');
const jshint = require('./gulp/jshint');
const sasslint = require('./gulp/sasslint');

gulp.task('clean:build', () => {
	return clean([config.dirs.build]);
});

gulp.task('clean:production', () => {
	return clean([config.dirs.production]);
});

gulp.task('clean', ['clean:build', 'clean:production']);

gulp.task('jshint', () => {
	return jshint([
		config.dirs.src + '/' + config.files.js,
		'!' + config.dirs.src + '/**/vendor/**/' + config.files.js
	]);
});

gulp.task('jscs', () => {
	return jscs([
		'gulpfile.js',
		config.dirs.tasks + '/' + config.files.js,
		config.dirs.src + '/' + config.files.js,
		'!' + config.dirs.src + '/**/vendor/**/' + config.files.js
	]);
});

gulp.task('sasslint', () => {
	return sasslint([
		config.dirs.src + '/' + config.files.scss,
		'!' + config.dirs.src + '/**/vendor/**/' + config.files.scss
	]);
});

gulp.task('test', ['jshint', 'jscs', 'sasslint']);