'use strict';

module.exports = {
	build: {
		options: {
			config: 'node_modules/habanero-code-style/css/.csscomb.json'
		},
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.less',
					'**/_*.less'
				],
				dest: '<%= config.src %>/styles/'
			}
		]
	}
};
