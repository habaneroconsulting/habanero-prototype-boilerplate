import * as config from './config';
import assemble from './assemble';
import connect from 'gulp-connect';
import copy from './copy';
import gulp from 'gulp';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import sasslint from './sasslint';
import styles from './styles';
import webpack from './webpack';

function onChange(file) {
	gutil.log('File', `${config.dirs.src}/${file}`, 'was changed. Running tasks...');
}

function log(verb, taskName) {
	gutil.log(`${verb} '\x1b[36m${taskName}\x1b[30m' by watch`);
}

function task(event, taskName, callback) {
	log('Started', taskName);

	callback()
		.pipe(plumber())
		.pipe(connect.reload())
		.on('end', () => {
			log('Finished', taskName);
		});
}

function copyTask(file) {
	task(file, 'copy:build', () =>
		copy(file, config.dirs.build, {
			base: `${process.cwd()}/${config.dirs.src}`,
			cwd: `${process.cwd()}/${config.dirs.src}`
		})
	);
}
export default () => {
	// Assemble pages
	gulp.watch([`${config.dirs.pages}/${config.files.templates}`], { cwd: config.dirs.src }).on(
		'change',
		(file) => {
			onChange(file);

			task(file, 'assemble-page:build', () =>
				assemble(`${config.dirs.src}/${file}`, config.dirs.build, {
					base: `${config.dirs.src}/${config.dirs.pages}`,
					cwd: `${config.dirs.src}/${config.dirs.pages}`
				})
			);
		}
	);

	// Assemble all
	gulp.watch(
		[
			config.files.templates,
			`data/${config.files.data}`,
			`!templates/pages/${config.files.templates}`
		],
		{ cwd: config.dirs.src }
	).on('change', (file) => {
		onChange(file);

		task(file, 'assemble-all:build', () =>
			assemble(
				`${config.dirs.src}/${config.dirs.pages}/${config.files.templates}`,
				config.dirs.build
			)
		);
	});

	// TypeScript files
	gulp.watch(config.files.ts, { cwd: config.dirs.src }).on('change', (file) => {
		onChange(file);

		task(file, 'tslint', () => tslint(`${config.dirs.src}/${file}`, {}, false));
	});

	webpack(`${config.files.webpack}`, `${config.dirs.build}/scripts`, { watch: true });

	// SCSS files
	gulp.watch(config.files.scss, { cwd: config.dirs.src })
		.on('change', (file) => {
			onChange(file);

			task(file, 'sasslint:build', () => sasslint(`${config.dirs.src}/${file}`, {}, false));

			task(file, 'styles:build', () =>
				styles(
					[
						`${config.dirs.src}/${config.files.scss}`,
						`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
					],
					config.dirs.build
				)
			);
		})
		.on('error', console.log);

	// Any other asset that needs to be directly copied
	gulp.watch(config.files.assets, { cwd: config.dirs.src }).on('change', (file) => {
		onChange(file);

		copyTask(file);
	});
}
