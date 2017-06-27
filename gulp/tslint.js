import * as config from './config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import tslint from 'gulp-tslint';

module.exports = (src, opts = {}, failOnError = true) => {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(tslint({
			configuration: 'tslint.json'
		}))
		.pipe(tslint.report());
};
