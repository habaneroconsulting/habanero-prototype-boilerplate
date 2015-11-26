'use strict';

module.exports = {
	options: {
		assetsDirs: [
			'<%= config.production %>',
			'<%= config.production %>/images'
		],
		patterns: {
			html_srcset: [
				// Requires three attempts for 1x, 2x, 3x
				[/srcset="([^, ]+),/g, 'Replacing reference to srcset images'],
				[/srcset=".+, (.+) .x/g, 'Replacing reference to x srcset images'],
				[/content=".+\/(.+)"/g, 'Replacing reference to meta content']
			]
		}
	},
	html: ['<%= config.production %>/**/*.html'],
	html_srcset: ['<%= config.production %>/**/*.html'],
	css: ['<%= config.production %>/styles/**/*.css']
};
