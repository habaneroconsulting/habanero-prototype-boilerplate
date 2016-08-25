'use strict';

const assemble = require('./gulp/assemble');
const clean = require('./gulp/clean');
const config = require('./gulp/config');
const copy = require('./gulp/copy');
const gulp = require('gulp');
const jscs = require('./gulp/jscs');
const jshint = require('./gulp/jshint');
const sasslint = require('./gulp/sasslint');
const sequence = require('gulp-sequence');
const styles = require('./gulp/styles');
const usemin = require('./gulp/usemin');

gulp.task('clean:temp', () => clean([config.dirs.temp]));
gulp.task('clean:build', () => clean([config.dirs.build]));
gulp.task('clean:production', () => clean([config.dirs.production]));
gulp.task('clean', ['clean:temp', 'clean:build', 'clean:production']);

gulp.task('jshint', () =>
	jshint([
		`${config.dirs.src}/${config.files.js}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.js}`
	])
);

gulp.task('jscs', () =>
	jscs([
		'gulpfile.js',
		`${config.dirs.tasks}/${config.files.js}`,
		`${config.dirs.src}/${config.files.js}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.js}`
	])
);

gulp.task('sasslint', () =>
	sasslint([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	])
);

gulp.task('test', ['jshint', 'jscs', 'sasslint']);

gulp.task('assemble:build', () => assemble(`${config.dirs.pages}/${config.files.templates}`, config.dirs.build));
gulp.task('assemble:production', () => assemble(`${config.dirs.pages}/${config.files.templates}`, config.dirs.production));

gulp.task('styles:build', () =>
	styles([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.build)
);

gulp.task('styles:production', () =>
	styles([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.production)
);

gulp.task('copy:build', () => copy(config.dirs.src, config.dirs.build));
gulp.task('copy:production', () => copy(config.dirs.src, config.dirs.production));

gulp.task('usemin:build', () => usemin(`${config.dirs.build}/${config.files.html}`, config.dirs.build));
gulp.task('usemin:production', () => usemin(`${config.dirs.production}/${config.files.html}`, config.dirs.production));

gulp.task('build', sequence(['test', 'clean:build'], ['assemble:build', 'styles:build', 'copy:build'], 'usemin:build'));
gulp.task('production', sequence(['test', 'clean:production'], ['assemble:production', 'styles:production', 'copy:production'], 'usemin:production'));
