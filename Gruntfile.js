'use strict';

module.exports = function (grunt) {
	// Load all grunt tasks
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
		'postcss:build',
		'copy:build',
		'assemble:build'
	]);

	grunt.registerTask('useminTasks', [
		'useminPrepare',
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
		'postcss:production',
		'copy:production',
		'useminTasks',
		'htmlmin'
	]);

	grunt.registerTask('serve', [
		'build',
		'connect:build',
		'watch'
	]);

	grunt.registerTask('production-serve', [
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
