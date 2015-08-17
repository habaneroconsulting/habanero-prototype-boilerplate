'use strict';

module.exports = {
	options: {
		assetsDirs: [
			'<%= config.prod %>',
			'<%= config.prod %>/images'
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
	html: ['<%= config.prod %>/**/*.html'],
	html_srcset: ['<%= config.prod %>/**/*.html'],
	css: ['<%= config.prod %>/styles/**/*.css']
};