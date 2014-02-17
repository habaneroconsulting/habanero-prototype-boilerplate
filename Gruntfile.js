'use strict';

var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var config = {
		src: 'source',
		test: 'test',
		prod: 'production'
	};

	grunt.initConfig({
		config: config,
		connect: {
			options: {
				port: 9000,
				hostname: 'localhost'
			},
			test: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, 'test')
						];
					}
				}
			}
		},
		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			less: {
				files: ['<%= config.src %>/styles/{,*/}*.{css,less}'],
				tasks: ['less:test']
			},
			html: {
				files: ['<%= config.src %>/*.html'],
				tasks: ['copy:html']
			},
			js: {
				files: ['<%= config.src %>/scripts/{,*/}*.js'],
				tasks: ['copy:js']
			},
			livereload: {
				files: [
					'<%= config.test %>/**/*.html',
					'{.tmp,<%= config.test %>}/styles/{,*/}*.css',
					'{.tmp,<%= config.test %>}/scripts/{,*/}*.js',
					'<%= config.test %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},
		clean: {
			test: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= config.test %>/*',
						'!<%= config.test %>/.git*'
					]
				}]
			},
			prod: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= config.prod %>/*',
						'!<%= config.prod %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		less: {
			test: {
				files: [
					{
						expand: true,
						cwd: '<%= config.src %>/styles/',
						src: [
							'**/*.css',
							'**/*.less',
							'!**/_*.less',
							'!_**/*'
						],
						dest: '<%= config.test %>/styles/',
						ext: '.css'
					}
				]
			},
			prod: {
				files: [
					{
						expand: true,
						cwd: '<%= config.src %>/styles/',
						src: [
							'**/*.css',
							'**/*.less',
							'!**/_*.less',
							'!_**/*'
						],
						dest: '.tmp/less/styles/',
						ext: '.css'
					}
				]
			}
		},
		useminPrepare: {
			html: '<%= config.src %>/*.html',
			options: {
				dest: '<%= config.prod %>'
			}
		},
		copy: {
			test: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.src %>',
					dest: '<%= config.test %>',
					src: [
						'**/*.html',
						'*.{ico,png,txt}',
						'images/{,*/}*',
						'styles/fonts/{,*/}*.*',
						'scripts/data/{,*/}*.*',
						'scripts/{,*/}*.*'
					]
				}]
			},
			prod: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.src %>',
					dest: '<%= config.prod %>',
					src: [
						'**/*.html',
						'*.{ico,png,txt}',
						'images/{,*/}*',
						'styles/fonts/{,*/}*.*',
						'scripts/data/{,*/}*.*',
						'scripts/{,*/}*.*'
					]
				}]
			},
			js: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.src %>',
					dest: '<%= config.test %>',
					src: [
						'scripts/{,*/}*.*'
					]
				}]
			},
			html: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.src %>',
					dest: '<%= config.test %>',
					src: [
						'**/*.html'
					]
				}]
			}
		},
		usemin: {	
			html: ['<%= config.prod %>/{,*/}*.html'],
			css: ['<%= config.prod %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= config.prod %>']
			}
		}
	});

	grunt.registerTask('server', [
		'build',
		'connect:test',
		'open',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:test',
		'less:test',
		'copy:test'
	]);

	grunt.registerTask('production', [
		'clean:prod',
		'less:prod',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'copy',
		'usemin'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};