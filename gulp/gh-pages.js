'use strict';

const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

module.exports = (src, opts) => {
	opts = Object.assign({
		branch: 'gh-pages'
	}, opts);

	return gulp.src(src)
		.pipe(ghpages(opts));
};
