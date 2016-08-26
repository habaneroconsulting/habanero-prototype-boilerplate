'use strict';

const config = require('./config');
const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');

module.exports = (src, dest, opts) => {
	opts = Object.assign({
		rootpath: config.dirs.src
	}, opts);

	return gulp.src(src)
		.pipe(inlinesource(opts))
		.pipe(gulp.dest(dest));
};
