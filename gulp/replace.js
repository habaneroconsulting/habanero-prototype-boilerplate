'use strict';

const del = require('del');
const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

module.exports = (src, dest, opts) => {
	const filepath = `${dest}/rev-manifest.json`;
	const manifest = gulp.src(`${dest}/rev-manifest.json`);

	opts = Object.assign({
		manifest: manifest
	}, opts);

	return gulp.src(src)
		.pipe(revReplace(opts))
		.pipe(gulp.dest(dest));
};
