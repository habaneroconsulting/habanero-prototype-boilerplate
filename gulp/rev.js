import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rev from 'gulp-rev';
import revDelete from 'gulp-rev-delete-original';

export default (src, dest) =>
	gulp.src(src)
		.pipe(plumber())
		.pipe(rev())
		.pipe(revDelete())
		.pipe(gulp.dest(dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(dest));
