import assemble from './gulp/assemble';
import clean from './gulp/clean';
import config from './gulp/config';
import connect from './gulp/connect';
import copy from './gulp/copy';
import ghpages from './gulp/gh-pages';
import gulp from 'gulp';
import htmlmin from './gulp/htmlmin';
import inline from './gulp/inline';
import replace from './gulp/replace';
import rev from './gulp/rev';
import sasslint from './gulp/sasslint';
import styles from './gulp/styles';
import useref from './gulp/useref';
import watch from './gulp/watch';
import webpack from './gulp/webpack';

/**
 * Cleaning temporary and build folders.
 */


gulp.task('clean:temp', () =>
	clean([config.dirs.temp], {
		force: true
	})
);

gulp.task('clean', () =>
	clean([config.dirs.temp, config.dirs.publish, config.dirs.build, config.dirs.production])
);


/**
 * Linting.
 */

gulp.task('sasslint', () =>
	sasslint([
		`${config.dirs.src}/${config.files.scss}`,
		`!${config.dirs.src}/**/vendor/**/${config.files.scss}`,

		// Images uses syntax not readable with sasslint
		'!**/reference/_images.scss'
	])
);

gulp.task('lint', gulp.series('sasslint'));



/**
 * Building the project.
 */

gulp.task('assemble:build', () =>
	assemble(`${config.dirs.src}/${config.dirs.pages}/${config.files.templates}`, config.dirs.build)
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

gulp.task('webpack:build', () =>
	webpack(`${config.files.webpack}`, `${config.dirs.build}/scripts`)
);

gulp.task('copy:build', () =>
	copy(config.copy.build, config.dirs.build, {
		base: config.dirs.src,
		cwd: config.dirs.src
	})
);

gulp.task(
	'build',
	gulp.series(
		gulp.parallel('lint', 'clean'),
		gulp.parallel(
			'assemble:build',
			'styles:build',
			'webpack:build',
			'copy:build'
		)
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

gulp.task('webpack:production', () =>
	webpack(`${config.files.webpack}`, `${config.dirs.temp}/scripts`)
);

gulp.task('javascript:production', () =>
	copy(`${config.dirs.src}/${config.files.js}`, config.dirs.temp)
);

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
	gulp.series(
		'lint',
		'clean',
		'assemble:production',
		'styles:production',
		'webpack:production',
		'javascript:production',
		'copy:production',
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

gulp.task('connect:build', () => connect(config.dirs.build));
gulp.task(
	'connect:production',
	gulp.series('production', () =>
		connect(
			config.dirs.production,
			{ livereload: false }
		)
	)
);


/**
 * Watch.
 */

gulp.task('watch', watch);
gulp.task('connect-watch', gulp.parallel('connect:build', 'watch'));
gulp.task('serve', gulp.series('build', 'connect-watch'));


/**
 * Deploy
 */

gulp.task('deploy',
	gulp.series('production', () =>
		ghpages(`${config.dirs.production}/**/*`)
	)
);


/**
 * Testing.
 */

gulp.task('test', gulp.series('lint', 'build', 'production', 'clean'));
