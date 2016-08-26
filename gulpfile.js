'use strict';

const assemble = require('./gulp/assemble');
const clean = require('./gulp/clean');
const config = require('./gulp/config');
const connect = require('./gulp/connect');
const copy = require('./gulp/copy');
const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlmin = require('./gulp/htmlmin');
const jscs = require('./gulp/jscs');
const jshint = require('./gulp/jshint');
const replace = require('./gulp/replace');
const rev = require('./gulp/rev');
const sasslint = require('./gulp/sasslint');
const sequence = require('gulp-sequence');
const styles = require('./gulp/styles');
const useref = require('./gulp/useref');
const watch = require('./gulp/watch');


/**
 * Cleaning temporary and build folders.
 */

gulp.task('clean:temp', () => clean([config.dirs.temp]));
gulp.task('clean:build', () => clean([config.dirs.build]));
gulp.task('clean:production', () => clean([config.dirs.production]));


/**
 * Testing and linting.
 */

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


/**
 * Building the project.
 */

gulp.task('assemble:build', () => assemble(`${config.dirs.pages}/${config.files.templates}`, config.dirs.build));

gulp.task('styles:build', () =>
	styles([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.build)
);

gulp.task('copy:build', () =>
	copy(config.copy.build, config.dirs.build, { base: config.dirs.src, cwd: config.dirs.src })
);

gulp.task('build', sequence(
	['test', 'clean:build'],
	['assemble:build', 'styles:build', 'copy:build']
));


/**
 * Release build of the project.
 */

gulp.task('assemble:production', () => assemble(`${config.dirs.pages}/${config.files.templates}`, config.dirs.production));

gulp.task('styles:production', () =>
	styles([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
	], config.dirs.temp)
);

gulp.task('copy:production', () =>
	copy(config.copy.production, config.dirs.production, { base: config.dirs.src, cwd: config.dirs.src })
);

gulp.task('useref:production', () => useref(`${config.dirs.production}/${config.files.html}`, config.dirs.production));
gulp.task('rev:production', () => rev(`${config.dirs.production}/${config.files.versioned}`, config.dirs.production));
gulp.task('replace:production', () => replace(`${config.dirs.production}/${config.files.versionedContainers}`, config.dirs.production));
gulp.task('htmlmin:production', () => htmlmin(`${config.dirs.production}/${config.files.html}`, config.dirs.production));

gulp.task('production', sequence(
	['test', 'clean:production'],
	['assemble:production', 'styles:production', 'copy:production'],
	'useref:production',
	'rev:production',
	'replace:production',
	'htmlmin:production',
	'clean:temp'
));


/**
 * Connect.
 */

gulp.task('connect:build', ['build'], () => connect(config.dirs.build));
gulp.task('connect:production', ['production'], () => connect(config.dirs.production, { livereload: false }));


/**
 * Watch.
 */

gulp.task('serve', ['connect:build'], watch);
