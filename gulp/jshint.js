'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

module.exports = (src, opts) => {
	opts = Object.assign({
		watch: false
	}, opts);

	return gulp.src(src)
		.pipe(jshint('./node_modules/habanero-code-style/js/.jshintrc'))
		.pipe(jshint.reporter(stylish))
		.pipe(gulpif(!opts.watch, jshint.reporter('fail')));
};
