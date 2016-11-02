'use strict';

const gulp = require('gulp');
const sasslint = require('gulp-sass-lint');

module.exports = (src, opts = {}, failOnError = true) => {
	opts = Object.assign({
		configFile: './node_modules/habanero-code-style/scss/sasslint.yml'
	}, opts);

	const task = gulp.src(src)
		.pipe(sasslint(opts))
		.pipe(sasslint.format());

	if (failOnError) {
		task.pipe(sasslint.failOnError());
	}

	return task;
};
