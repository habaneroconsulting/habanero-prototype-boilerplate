'use strict';

const gulp = require('gulp');
const jscs = require('gulp-jscs');

module.exports = (pattern, opts) => {
	opts = Object.assign({
		configPath: './node_modules/habanero-code-style/js/.jscsrc'
	}, opts);

	return gulp.src(pattern)
		.pipe(jscs(opts))
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
};
