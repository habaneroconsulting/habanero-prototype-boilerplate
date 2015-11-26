'use strict';

module.exports = {
	options: {
		config: './node_modules/habanero-code-style/scss/scsslint.yml',
		colorizeOutput: true
	},
	all: {
		src: [
			'<%= config.src %>/styles/**/*.scss',
			'!<%= config.src %>/styles/vendor/**/*.scss'
		]
	}
};
