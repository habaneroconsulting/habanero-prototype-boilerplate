'use strict';

const gulp = require('gulp');
const jscs = require('gulp-jscs');

module.exports = (src, opts) => {
	opts = Object.assign({
		configPath: './node_modules/habanero-code-style/js/.jscsrc'
	}, opts);

	return gulp.src(src)
		.pipe(jscs(opts))
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'))
		.on('error', console.log);
};
