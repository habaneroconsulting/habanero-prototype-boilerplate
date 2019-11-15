import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import pixrem from 'pixrem';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

export default (src, dest, opts) => {
	opts = Object.assign({}, opts);

	const processors = [
		pixrem(),
		autoprefixer(),
		assets({ loadPaths: ['source/styles'] }),
		cssnano({ safe: true })
	];

	return gulp.src(src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass(opts))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest));
}
