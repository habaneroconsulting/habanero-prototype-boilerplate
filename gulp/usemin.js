'use strict';

const config = require('./config');
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const minifyHtml = require('gulp-minify-html');
const rev = require('gulp-rev');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	// Each task needs to be defined as a function since we're reusing
	// the js pipeline multiple times. Just in case, do this for all
	// pipelines.
	// https://github.com/zont/gulp-usemin#usage
	return gulp.src(src)
		.pipe(usemin({
			css: [
				() => sourcemaps.init(),
				() => minifyCss(),
				() => sourcemaps.write('./')
			],
			html: [
				() => minifyHtml({
					empty: true
				})
			],
			js: [
				() => sourcemaps.init(),
				() => uglify({
					preserveComments: function (node, comment) {
						return comment.value.charAt(0) === '!';
					}
				}),
				() => sourcemaps.write('./')
			]
		}))
		.pipe(gulp.dest(dest))
		.on('error', console.log);
};
