'use strict';

const gulp = require('gulp');
const sasslint = require('gulp-sass-lint');

module.exports = (pattern, opts) => {
	opts = Object.assign({
		configFile: './node_modules/habanero-code-style/scss/sasslint.yml'
	}, opts);

	return gulp.src(pattern)
		.pipe(sasslint(opts))
		.pipe(sasslint.format())
		.pipe(sasslint.failOnError());
};
