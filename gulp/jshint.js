'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');

module.exports = (src) => {
	return gulp.src(src)
		.pipe(jshint('./node_modules/habanero-code-style/js/.jshintrc'))
		.pipe(jshint.reporter('default'))
		.on('error', console.log);
};
