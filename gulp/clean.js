'use strict';

const del = require('del');

module.exports = (pattern, opts) => {
	opts = Object.assign({}, opts);

	return del(pattern, opts)
		.then(paths => {
			if (paths.length) {
				console.log(`Deleted files and folders:\n ${paths.join('\n')}`);
			} else {
				console.log(`No files to delete.`);
			}
		});
};
