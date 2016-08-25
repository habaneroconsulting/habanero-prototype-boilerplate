'use strict';

const gulp = require('gulp');

module.exports = (src, dest, opts) => {
	opts = Object.assign({
		base: src,
		cwd: src
	}, opts);

	return gulp.src([
			'**/*.{config,html,ico,png,txt,xml}',
			'images/**/*',
			'scripts/**/*',
			'styles/{fonts,images}/**/*',
			'!styles/**/*.scss'
		], opts)
		.pipe(gulp.dest(dest));
};
