import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import pixrem from 'pixrem';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

module.exports = (src, dest, opts) => {
	opts = Object.assign({}, opts);

	const processors = [
		pixrem(),
		autoprefixer({ browsers: ['last 2 versions'] }),
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
};
