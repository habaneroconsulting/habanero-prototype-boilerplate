import yargs from 'yargs';
import * as config from './config';
import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import header from 'gulp-header';
import lazypipe from 'lazypipe';
import lec from 'gulp-line-ending-corrector';
import pkg from '../package';
import plumber from 'gulp-plumber';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import useref from 'gulp-useref';

module.exports = (src, dest, opts) => {
	opts = Object.assign({
		base: config.dirs.production,
		newLine: '\n\n',
		transformPath: (filePath) => filePath.replace(/\.\.\//g, '')
	}, opts);

	const uglifyOpts = {
		output: {
			comments: /@license|@preserve|^!/
		}
	};

	if (yargs.argv.buildnumber) {
		pkg.version = `v${yargs.argv.buildnumber}`;
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
		.pipe(plumber())
		.pipe(lec())
		.pipe(
			useref(
				opts,
				// TODO: Temporarily removed sourcempaping due to libsass issue
				// lazypipe().pipe(sourcemaps.init, { loadMaps: true })
			)
		)
		.pipe(gulpif('*.js', uglify(uglifyOpts)))
		.pipe(gulpif('*.js', header(banner, { pkg: pkg })))
		.pipe(gulpif('*.css', cleanCss()))
		.pipe(gulpif('!**/*.html', rev()))
		.pipe(revReplace())
		// TODO: Temporarily removed sourcempaping due to libsass issue
		// .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest((file) => {
			const dirs = file.relative.match(/\.\.\//g) || [];
			const path = dirs.reduce((str) => str + '/fakepath', '');

			return config.dirs.production + path;
		}));
};
