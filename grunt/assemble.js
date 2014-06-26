'use strict';

module.exports = {
    options: {
        data: '<%= config.src %>/data/*.{json,yml}',
        flatten: true,
        layout: '<%= config.src %>/templates/layouts/default.hbs',
        partials: '<%= config.src %>/templates/partials/**/*.hbs',
        plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap']
    },
    test: {
        files: [
            {
                expand: true,
                cwd: '<%= config.src %>/pages/',
                src: ['**/*.hbs'],
                dest: '<%= config.test %>'
            }
        ]
    },
    prod: {
        files: [
            {
                expand: true,
                cwd: '<%= config.src %>/pages/',
                src: ['**/*.hbs'],
                dest: '<%= config.prod %>'
            }
        ]
    }
};