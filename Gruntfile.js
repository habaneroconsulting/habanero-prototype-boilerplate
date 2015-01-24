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

	grunt.registerTask('build', [
		'clean:test',
		'jshint',
		'jscs',
		'less:test',
		'autoprefixer:test',
		'copy:test',
		'assemble:test'
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
		'concat',
		'uglify',
		'cssmin',
		'usemin'
	]);

	grunt.registerTask('serve', [
		'build',
		'connect:test',
		'watch'
	]);

	grunt.registerTask('prodserve', [
		'production',
		'connect:prod'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};
