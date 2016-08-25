'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');

module.exports = (pattern) => {
	return gulp.src(pattern)
		.pipe(jshint('./node_modules/habanero-code-style/js/.jshintrc'))
		.pipe(jshint.reporter('default'));
};
