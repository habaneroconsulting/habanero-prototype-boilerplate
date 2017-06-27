import del from 'del';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import revReplace from 'gulp-rev-replace';

module.exports = (src, dest, opts) => {
	const filepath = `${dest}/rev-manifest.json`;
	const manifest = gulp.src(`${dest}/rev-manifest.json`);

	opts = Object.assign({
		manifest: manifest
	}, opts);

	return gulp.src(src)
		.pipe(plumber())
		.pipe(revReplace(opts))
		.pipe(gulp.dest(dest));
};
