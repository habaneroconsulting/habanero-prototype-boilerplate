'use strict';

const assemble = require('./gulp/assemble');
const clean = require('./gulp/clean');
const config = require('./gulp/config');
const copy = require('./gulp/copy');
const gulp = require('gulp');
const jscs = require('./gulp/jscs');
const jshint = require('./gulp/jshint');
const replace = require('./gulp/replace');
const rev = require('./gulp/rev');
const sasslint = require('./gulp/sasslint');
const sequence = require('gulp-sequence');
const styles = require('./gulp/styles');
const useref = require('./gulp/useref');

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
	], config.dirs.temp)
);

gulp.task('copy:build', () => copy(config.dirs.src, config.dirs.build));
gulp.task('copy:production', () => copy(config.dirs.src, config.dirs.production));

gulp.task('useref:production', () => useref(`${config.dirs.production}/${config.files.html}`, config.dirs.production));
gulp.task('rev:production', () => rev(`${config.dirs.production}/${config.files.assets}`, config.dirs.production));
gulp.task('replace:production', () => replace(`${config.dirs.production}/${config.files.assetContainers}`, config.dirs.production));

gulp.task('build', sequence(['test', 'clean:build'], ['assemble:build', 'styles:build', 'copy:build']));

gulp.task('production', sequence(
	['test', 'clean:production'],
	['assemble:production', 'styles:production', 'copy:production'],
	'useref:production',
	'rev:production',
	'replace:production'
));
