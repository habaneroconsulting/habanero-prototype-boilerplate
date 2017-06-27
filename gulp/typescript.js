import gulp from 'gulp';
import plumber from 'gulp-plumber';
import typescript from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

module.exports = (src, dest, srcOpts = {}) => {
	const tsProject = typescript.createProject('tsconfig.json');

	const tsRes = gulp.src(src, srcOpts)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(tsProject(typescript.reporter.defaultReporter()));

	return tsRes.js
		.pipe(plumber())
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest));
};
