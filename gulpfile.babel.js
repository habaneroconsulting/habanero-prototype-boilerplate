'use strict';

import assemble from './gulp/assemble';
import clean from './gulp/clean';
import config from './gulp/config';
import connect from './gulp/connect';
import copy from './gulp/copy';
import ghpages from './gulp/gh-pages';
import gulp from 'gulp';
import gutil from 'gulp-util';
import htmlmin from './gulp/htmlmin';
import inline from './gulp/inline';
import replace from './gulp/replace';
import rev from './gulp/rev';
import sasslint from './gulp/sasslint';
import sequence from 'gulp-sequence';
import styles from './gulp/styles';
import tslint from './gulp/tslint';
import typescript from './gulp/typescript';
import useref from './gulp/useref';
import watch from './gulp/watch';

/**
 * Cleaning temporary and build folders.
 */

gulp.task('clean:temp', () =>
	clean(
		[
			config.dirs.temp
		],
		{
			force: true
		}
	)
);

gulp.task('clean', () =>
	clean([
		config.dirs.temp,
		config.dirs.publish,
		config.dirs.build,
		config.dirs.production
	])
);


/**
 * Linting.
 */

gulp.task('tslint', () => tslint([`${config.dirs.src}/${config.files.ts}`]));

gulp.task('sasslint', () =>
	sasslint([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`,

		// Images uses syntax not readable with sasslint
		'!**/reference/_images.scss'
	])
);

gulp.task('lint', ['tslint', 'sasslint']);


/**
 * Building the project.
 */

gulp.task('assemble:build', () =>
	assemble(
		`${config.dirs.src}/${config.dirs.pages}/${config.files.templates}`,
		config.dirs.build
	)
);

gulp.task('styles:build', () =>
	styles(
		[
			`${config.dirs.src}/${config.files.scss}`,
			`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
		],
		config.dirs.build
	)
);

gulp.task('typescript:build', () => {
	typescript(`${config.dirs.src}/${config.files.ts}`, config.dirs.build);
});

gulp.task('copy:build', () =>
	copy(config.copy.build, config.dirs.build, {
		base: config.dirs.src,
		cwd: config.dirs.src
	})
);

gulp.task(
	'build',
	sequence(
		['lint', 'clean'],
		['assemble:build', 'styles:build', 'typescript:build', 'copy:build']
	)
);


/**
 * Release build of the project.
 */

gulp.task('assemble:production', () =>
	assemble(
		`${config.dirs.src}/${config.dirs.pages}/${config.files.templates}`,
		config.dirs.production
	)
);

gulp.task('styles:production', () =>
	styles(
		[
			`${config.dirs.src}/${config.files.scss}`,
			`!${config.dirs.src}/**/vendor/**/${config.files.scss}`
		],
		config.dirs.temp
	)
);

gulp.task('css:production', () =>
	copy(`${config.dirs.src}/${config.files.css}`, config.dirs.temp)
);

gulp.task('typescript:production', () => {
	typescript(`${config.dirs.src}/${config.files.ts}`, config.dirs.temp);
});

gulp.task('javascript:production', () => {
	copy(`${config.dirs.src}/${config.files.js}`, config.dirs.temp);
});

gulp.task('copy:production', () =>
	copy(config.copy.production, config.dirs.production, {
		base: config.dirs.src,
		cwd: config.dirs.src
	})
);

gulp.task('inline:production', () =>
	inline(
		`${config.dirs.production}/${config.files.html}`,
		config.dirs.production
	)
);

gulp.task('useref:production', () =>
	useref(
		`${config.dirs.production}/${config.files.html}`,
		config.dirs.production
	)
);

gulp.task('rev:production', () =>
	rev(
		`${config.dirs.production}/${config.files.versioned}`,
		config.dirs.production
	)
);

gulp.task('replace:production', () =>
	replace(
		`${config.dirs.production}/${config.files.versionedContainers}`,
		config.dirs.production
	)
);

gulp.task('htmlmin:production', () =>
	htmlmin(
		`${config.dirs.production}/${config.files.html}`,
		config.dirs.production
	)
);

gulp.task(
	'production',
	sequence(
		['lint', 'clean'],
		[
			'assemble:production',
			'styles:production',
			'css:production',
			'typescript:production',
			'javascript:production',
			'copy:production'
		],
		'inline:production',
		'useref:production',
		'rev:production',
		'replace:production',
		'replace:production',
		'htmlmin:production',
		'clean:temp'
	)
);


/**
 * Connect.
 */

gulp.task('connect:build', ['build'], () => connect(config.dirs.build));
gulp.task('connect:production', ['production'], () =>
	connect(config.dirs.production, { livereload: false })
);


/**
 * Watch.
 */

gulp.task('serve', ['connect:build'], watch);


/**
 * Deploy
 */

gulp.task('deploy', ['production'], () =>
	ghpages(`${config.dirs.production}/**/*`)
);


/**
 * Testing.
 */

gulp.task('test', sequence('lint', 'build', 'production', 'clean'));
