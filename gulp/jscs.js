'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const jscs = require('gulp-jscs');
const stylish = require('jscs-stylish');

module.exports = (src, opts) => {
	opts = Object.assign({
		configPath: './node_modules/habanero-code-style/js/.jscsrc',
		reporter: stylish.path,
		watch: false
	}, opts);

	return gulp.src(src)
		.pipe(jscs(opts))
		.pipe(jscs.reporter())
		.pipe(gulpif(!opts.watch, jscs.reporter('fail')));
};
