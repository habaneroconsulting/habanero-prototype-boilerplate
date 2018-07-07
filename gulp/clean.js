import del from 'del';
import gutil from 'gulp-util';

export default (src, opts) => {
	opts = Object.assign({}, opts);

	return del(src, opts)
		.then(paths => {
			if (paths.length) {
				gutil.log(`Deleted files and folders:\n ${paths.join('\n')}`);
			} else {
				gutil.log(`No files to delete.`);
			}
		});
}
