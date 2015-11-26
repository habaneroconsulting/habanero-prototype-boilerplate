'use strict';

module.exports = {
	options: {
		livereload: true,
		nospawn: true
	},
	assembleGlobal: {
		files: ['<%= config.src %>/{data,templates}/**/*.{md,hbs,yml}'],
		tasks: ['assemble:build']
	},
	assemble: {
		files: ['<%= config.src %>/pages/**/*.{md,hbs,yml}'],
		tasks: ['assemble:build']
	},
	sass: {
		files: ['<%= config.src %>/styles/**/*.{css,scss}'],
		tasks: ['sass:build', 'postcss:build']
	},
	less: {
		files: ['<%= config.src %>/styles/**/*.{css,less}'],
		tasks: ['less:build', 'autoprefixer:build']
	},
	html: {
		files: ['<%= config.src %>/*.html'],
		tasks: ['newer:copy:html']
	},
	js: {
		files: ['<%= config.src %>/scripts/**/*.js'],
		tasks: ['newer:jshint:all', 'newer:jscs', 'newer:copy:js']
	},
	images: {
		files: ['<%= config.src %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
		tasks: ['newer:copy:build']
	},
	livereload: {
		files: [
			'<%= config.build %>/**/*.html',
			'{.tmp,<%= config.build %>}/styles/**/*.css',
			'{.tmp,<%= config.build %>}/scripts/**/*.js',
			'<%= config.build %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};
