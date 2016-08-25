'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(sass(opts))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest))
		.on('error', console.log);
};
