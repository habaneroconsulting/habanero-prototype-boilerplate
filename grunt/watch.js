'use strict';

module.exports = {
	options: {
		livereload: true,
		nospawn: true
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
		tasks: ['less:test', 'autoprefixer:test']
	},
	html: {
		files: ['<%= config.src %>/*.html'],
		tasks: ['newer:copy:html']
	},
	js: {
		files: ['<%= config.src %>/scripts/**/*.js'],
		tasks: ['newer:jshint:all', 'newer:jscs', 'newer:copy:js']
	},
	livereload: {
		files: [
			'<%= config.test %>/**/*.html',
			'{.tmp,<%= config.test %>}/styles/**/*.css',
			'{.tmp,<%= config.test %>}/scripts/**/*.js',
			'<%= config.test %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};
