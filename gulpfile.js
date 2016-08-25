'use strict';

const gulp = require('gulp');
const config = require('./gulp/config');
const clean = require('./gulp/clean');

gulp.task('clean:build', () => {
	return clean([config.dirs.build]);
});

gulp.task('clean:production', () => {
	return clean([config.dirs.production]);
});

gulp.task('clean', ['clean:build', 'clean:production']);
