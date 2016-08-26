'use strict';

const gulp = require('gulp');
const rev = require('gulp-rev');
const revDelete = require('gulp-rev-delete-original');

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	return gulp.src(src)
		.pipe(rev())
		.pipe(revDelete())
		.pipe(gulp.dest(dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(dest));
};
