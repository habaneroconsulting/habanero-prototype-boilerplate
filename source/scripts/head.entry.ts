function main() {
	noJsRemoveClassname();
	autoFocus();

	window.addEventListener('hashchange', () => autoFocus());
}

/**
 * @param selector The element in which to put js and no-js classnames on.
 * @param removeClassname The classname to be removed.
 * @param addClassname The classname to be added.
 */
function noJsRemoveClassname(selector = 'html', removeClassname = 'no-js', addClassname = 'js') {
	const element = document.querySelector(selector);

	if (element instanceof HTMLElement) {
		element.classList.remove(removeClassname);
		element.classList.add(addClassname);
	}
}

/**
 * Internet Explorer does not support the "autofocus" attribute.
 */
function autoFocus() {
	const element = document.querySelector('[autofocus]');

	if (element instanceof HTMLElement && document.activeElement !== element) {
		element.focus();
	}
}

main();
