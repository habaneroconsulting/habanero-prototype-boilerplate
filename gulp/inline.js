import gulp from 'gulp';
import plumber from 'gulp-plumber';
import revReplace from 'gulp-rev-replace';

export default (src, dest, opts) => {
	const manifest = gulp.src(`${dest}/rev-manifest.json`);

	opts = Object.assign({
		manifest: manifest
	}, opts);

	return gulp.src(src)
		.pipe(plumber())
		.pipe(revReplace(opts))
		.pipe(gulp.dest(dest));
}
