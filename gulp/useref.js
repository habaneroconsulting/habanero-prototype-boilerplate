'use strict';

const argv = require('yargs').argv;
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const header = require('gulp-header');
const lazypipe = require('lazypipe');
const pkg = require('../package');
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

	if (argv.buildnumber) {
		pkg.version = `v${argv.buildnumber}`;
	}

	const banner = [
		'/**',
		' * <%= pkg.name %> - <%= pkg.description %>',
		' * @author <%= pkg.author %>',
		' * @version <%= pkg.version %>',
		' * @link <%= pkg.homepage %>',
		' * @license <%= pkg.license %>',
		' */',
		'\n'
	].join('\n');

	return gulp.src(src)
		.pipe(
			useref(
				opts,
				lazypipe().pipe(sourcemaps.init, { loadMaps: true }),
				lazypipe().pipe(() => gulpif('*.js', uglify(uglifyOpts)))
			)
		)
		.pipe(gulpif('*.js', header(banner, { pkg: pkg })))
		.pipe(gulpif('*.css', cleanCss()))
		.pipe(gulpif('!**/*.html', rev()))
		.pipe(revReplace())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest));
};
