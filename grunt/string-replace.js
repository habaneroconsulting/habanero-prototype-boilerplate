'use strict';

module.exports = {
	options: {
		map: true
	},
	production: {
		files: {
			'<%= config.production %>/styles/styles.min.css': '<%= config.production %>/styles/styles.min.css'
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
