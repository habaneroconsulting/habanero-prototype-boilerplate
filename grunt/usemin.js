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
				[/srcset=".+, (.+) 2x/g, 'Replacing reference to 2x srcset images'],
				[/srcset=".+, (.+) 3x"/g, 'Replacing reference to 3x srcset images']
			]
		}
	},
	html: ['<%= config.production %>/**/*.html'],
	html_srcset: ['<%= config.production %>/**/*.html'],
	css: ['<%= config.production %>/styles/**/*.css']
};