'use strict';

module.exports = {
	test: {
		options: '.csscomb.json',
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
