import gulp from 'gulp';
import named from 'vinyl-named';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

export default (src, dest, opts = {}) => {
	const config = require('../webpack.config');

	const webpackConfig = {...opts, ...{ mode: 'development' }, ...config};

	return gulp.src(src)
		.pipe(plumber())
		.pipe(named())
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(dest));
}
