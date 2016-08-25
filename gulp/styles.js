'use strict';

const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const pixrem = require('pixrem');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	const processors = [
		pixrem(),
		autoprefixer()
	];

	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(sass(opts))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest))
		.on('error', console.log);
};
