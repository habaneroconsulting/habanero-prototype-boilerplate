'use strict';

module.exports = {
	options: {
		data: '<%= config.src %>/data/*.{json,yml}',
		flatten: true,
		layout: '<%= config.src %>/templates/layouts/default.hbs',
		partials: '<%= config.src %>/templates/partials/**/*.hbs',
		plugins: ['grunt-assemble-sitemap'],
		sitemap: {
			homepage: '<%= config.url %>',
			changefreq: 'monthly',
			relativedest: true
		}
	},
	build: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.build %>'
			}
		]
	},
	production: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.production %>'
			}
		]
	}
};
