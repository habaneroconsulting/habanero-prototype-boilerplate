'use strict';
module.exports = function (grunt) {
    // Load all grunt tasks
    grunt.loadNpmTasks('assemble');
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt);

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
