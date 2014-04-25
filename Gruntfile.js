'use strict';

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // Load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('assemble');

    // Configurable paths
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
                            mountFolder(connect, config.test)
                        ];
                    },
                    open: true
                }
            },          
            prod: {
                options: {
                    keepalive: true,
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, config.prod)
                        ];
                    },
                    open: true
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
            assembleGlobal: {
                files: ['<%= config.src %>/templates/**/*.{md,hbs,yml}'],
                tasks: ['assemble:test']
            },
            assemble: {
                files: ['<%= config.src %>/{content,data,pages}/**/*.{md,hbs,yml}'],
                tasks: ['newer:assemble:test']
            },
            less: {
                files: ['<%= config.src %>/styles/**/*.{css,less}'],
                tasks: ['less:test']
            },
            html: {
                files: ['<%= config.src %>/*.html'],
                tasks: ['copy:html']
            },
            js: {
                files: ['<%= config.src %>/scripts/**/*.js'],
                tasks: ['copy:js']
            },
            livereload: {
                files: [
                    '<%= config.test %>/**/*.html',
                    '{.tmp,<%= config.test %>}/styles/**/*.css',
                    '{.tmp,<%= config.test %>}/scripts/**/*.js',
                    '<%= config.test %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        assemble: {
            options: {
                flatten: true,
                layout: '<%= config.src %>/templates/layouts/default.hbs',
                data: '<%= config.src %>/data/*.{json,yml}',
                partials: '<%= config.src %>/templates/partials/*.hbs',
                plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
            },
            test: {             
                files: {
                    '<%= config.test %>': ['<%= config.src %>/pages/**/*.hbs']
                }
            },
            prod: {                
                files: {
                    '<%= config.prod %>': ['<%= config.src %>/pages/**/*.hbs']
                }
            },
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
                        'images/**/*',
                        'styles/fonts/**/*.*',
                        'scripts/data/**/*.*',
                        'scripts/**/*.*'
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
                        // '**/*.html',
                        '*.{ico,png,txt}',
                        'images/**/*',
                        'styles/fonts/**/*.*',
                        'scripts/data/**/*.*',
                        'scripts/**/*.*'
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
                        'scripts/**/*.*'
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
        useminPrepare: {
            html: '<%= config.prod %>/index.html',
            options: {
                dest: '<%= config.prod %>'
            }
        },
        usemin: {
            html: ['<%= config.prod %>/**/*.html']
        }
    });

    grunt.registerTask('server', [
        'build',
        'connect:test',
        'watch'
    ]);

    grunt.registerTask('prodserver', [
        'production',
        'connect:prod'
    ]);

    grunt.registerTask('build', [
        'clean:test',
        'less:test',
        'copy:test',
        'assemble:test'
    ]);

    grunt.registerTask('production', [
        'clean:prod',
        'assemble:prod',
        'less:prod',
        'copy:prod',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
