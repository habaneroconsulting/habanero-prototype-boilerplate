'use strict';

const assemble = require('./assemble');
const config = require('./config');
const connect = require('gulp-connect');
const copy = require('./copy');
const gulp = require('gulp');
const gutil = require('gulp-util');
const jscs = require('./jscs');
const jshint = require('./jshint');
const sasslint = require('./sasslint');
const styles = require('./styles');

function onChange(file) {
	gutil.log('File', file.path, 'was', file.type, 'running tasks...');
}

function log(verb, taskName) {
	gutil.log(`${verb} '\x1b[36m${taskName}\x1b[30m' by watch`);
}

function task(event, taskName, callback) {
	log('Started', taskName);

	callback()
		.pipe(connect.reload())
		.on('end', () => {
			log('Finished', taskName);
		});
}

function copyTask(file) {
	task(file, 'copy:build', () => copy(file.path, config.dirs.build, {
		base: `${process.cwd()}/${config.dirs.src}`,
		cwd: `${process.cwd()}/${config.dirs.src}`
	}));
}

module.exports = () => {
	// Assemble assets like templates, pages and data
	gulp.watch([
			`${config.dirs.src}/${config.files.templates}`,
			`${config.dirs.src}/data/${config.files.data}`
		])
		.on('change', (file) => {
			onChange(file);

			task(file, 'assemble:build', () =>
				assemble(`${config.dirs.pages}/${config.files.templates}`, config.dirs.build)
			);
		});

	// JavaScript files
	gulp.watch(`${config.dirs.src}/${config.files.js}`)
		.on('change', (file) => {
			onChange(file);

			task(file, 'jshint:build', () => jshint(file.path, { watch: true }));
			task(file, 'jscs:build', () => jscs(file.path, { watch: true }));
			copyTask(file);
		});

	// SCSS files
	gulp.watch(`${config.dirs.src}/${config.files.scss}`)
		.on('change', (file) => {
			onChange(file);

			task(file, 'sasslint:build', () => sasslint(file.path, {}, false));

			task(file, 'styles:build', () =>
				styles([
					`${config.dirs.src}/${config.files.scss}`,
					`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
				], config.dirs.build)
			);
		});

	// Any other asset that needs to be directly copied
	gulp.watch(`${config.dirs.src}/${config.files.assets}`)
		.on('change', (file) => {
			onChange(file);

			copyTask(file);
		});
};
