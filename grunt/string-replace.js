'use strict';

module.exports = {
	options: {
		map: true
	},
	prod: {
		files: {
			'<%= config.prod %>/styles/styles.min.css': '<%= config.prod %>/styles/styles.min.css'
		},
		options: {
			replacements: [
				{
					pattern: /([^\n])(\/\*!)/g,
					replacement: '$1\n\n/*!'
				},
				{
					pattern: /\*\/([^\n])/g,
					replacement: '*/\n$1'
				}
			]
		}
	}
};
