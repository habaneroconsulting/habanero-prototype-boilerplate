'use strict';

const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const connect = require('gulp-connect');
const cssnano = require('cssnano');
const gulp = require('gulp');
const pixrem = require('pixrem');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	const processors = [
		pixrem(),
		autoprefixer({ browsers: ['last 2 versions'] }),
		assets({ loadPaths: ['source/styles'] }),
		cssnano({ safe: true })
	];

	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(sass(opts))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest))
		.pipe(connect.reload());
};
