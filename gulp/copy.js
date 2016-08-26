'use strict';

const connect = require('gulp-connect');
const gulp = require('gulp');

module.exports = (src, dest, opts) => {
	return gulp.src(src, opts)
		.pipe(gulp.dest(dest))
		.pipe(connect.reload());
};
