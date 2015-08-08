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

	grunt.registerTask('comb', [
		'csscomb'
	]);

	grunt.registerTask('build', [
		'clean:build',
		'jshint',
		'jscs',
		'less:build',
		'autoprefixer:build',
		'copy:build',
		'assemble:build'
	]);

	grunt.registerTask('production', [
		'clean:prod',
		'jshint',
		'jscs',
		'assemble:prod',
		'less:prod',
		'autoprefixer:prod',
		'copy:prod',
		'useminPrepare',
		'uglify',
		'cssmin',
		'concat',
		'usemin'
	]);

	grunt.registerTask('serve', [
		'build',
		'connect:build',
		'watch'
	]);

	grunt.registerTask('prodserve', [
		'production',
		'connect:prod'
	]);

	grunt.registerTask('deploy', [
		'production',
		'gh-pages'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};
