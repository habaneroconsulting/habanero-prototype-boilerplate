import connect from 'gulp-connect';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

module.exports = (src, dest, opts) => {
	return gulp.src(src, opts)
		.pipe(plumber())
		.pipe(gulp.dest(dest))
		.pipe(connect.reload());
};
