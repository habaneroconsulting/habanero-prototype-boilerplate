import gulp from 'gulp';
import plumber from 'gulp-plumber';
import tslint from 'gulp-tslint';

export default (src) => {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(tslint({
			configuration: 'tslint.json'
		}))
		.pipe(tslint.report());
}
