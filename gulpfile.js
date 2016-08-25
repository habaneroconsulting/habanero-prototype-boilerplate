'use strict';

const assemble = require('./gulp/assemble');
const clean = require('./gulp/clean');
const config = require('./gulp/config');
const gulp = require('gulp');
const jscs = require('./gulp/jscs');
const jshint = require('./gulp/jshint');
const sass = require('./gulp/sass');
const sasslint = require('./gulp/sasslint');

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

gulp.task('sass:build', () =>
	sass([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.build)
);

gulp.task('sass:production', () =>
	sass([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.production)
);
