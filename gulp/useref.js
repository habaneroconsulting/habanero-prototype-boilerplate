'use strict';

const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const lazypipe = require('lazypipe');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');

module.exports = (src, dest, opts) => {
	opts = Object.assign({
		newLine: '\n\n'
	}, opts);

	const uglifyOpts = {
		preserveComments: function (node, comment) {
			return comment.value.charAt(0) === '!';
		}
	};

	return gulp.src(src)
		.pipe(useref(opts, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
		.pipe(gulpif('*.js', uglify(uglifyOpts)))
		.pipe(gulpif('*.css', cleanCss()))
		.pipe(gulpif('!**/*.html', rev()))
		.pipe(revReplace())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest));
};
