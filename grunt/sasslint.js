'use strict';

module.exports = {
	options: {
		configFile: './node_modules/habanero-code-style/scss/sasslint.yml'
	},
	all: {
		src: [
			'<%= config.src %>/styles/**/*.scss',
			'!<%= config.src %>/styles/vendor/**/*.scss'
		]
	}
};
