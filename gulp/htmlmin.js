'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

module.exports = (src, dest, opts) => {
	opts = Object.assign({
		collapseWhitespace: true
	}, opts);

	return gulp.src(src)
		.pipe(htmlmin(opts))
		.pipe(gulp.dest(dest));
};
