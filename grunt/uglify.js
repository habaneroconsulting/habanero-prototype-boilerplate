'use strict';

module.exports = {
	options: {
		preserveComments: function (node, comment) {
			return comment.value.charAt(0) === '!';
		}
	}
};
