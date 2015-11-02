'use strict';

module.exports = function (grunt) {
	// Load all grunt tasks
	grunt.loadNpmTasks('assemble');

	require('load-grunt-tasks')(grunt);
	require('load-grunt-config')(grunt, {
		jitGrunt: true
	});

	grunt.registerTask('test', [
		'jshint',
		'jscs'
	]);

	grunt.registerTask('test-build', [
		'test',
		'build',
		'production'
	]);

	grunt.registerTask('comb', [
		'csscomb'
	]);

	grunt.registerTask('build', [
		'clean:build',
		'sass:build',
		'autoprefixer:build',
		'copy:build',
		'assemble:build'
	]);

	grunt.registerTask('useminTasks', [
		'useminPrepare',
		'cssmin:generated',
		'uglify:generated',
		'concat:generated',
		'string-replace',
		'filerev',
		'usemin'
	]);

	grunt.registerTask('production', [
		'clean:production',
		'assemble:production',
		'sass:production',
		'autoprefixer:production',
		'copy:production',
		'useminTasks',
		'htmlmin'
	]);

	grunt.registerTask('serve', [
		'build',
		'connect:build',
		'watch'
	]);

	grunt.registerTask('prodserve', [
		'production',
		'connect:production'
	]);

	grunt.registerTask('deploy', [
		'production',
		'gh-pages',
		'open:production'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};
