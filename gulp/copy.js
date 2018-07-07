import connect from 'gulp-connect';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

export default (src, dest, opts) =>
	gulp.src(src, opts)
		.pipe(plumber())
		.pipe(gulp.dest(dest))
		.pipe(connect.reload());
