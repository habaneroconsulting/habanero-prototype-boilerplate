export default function forEach<T extends Node>(
	nodeList: NodeListOf<T> | null,
	callback: (node: T, index?: number) => void,
	scope = this
) {
	if (nodeList) {
		for (let i = 0; i < nodeList.length; i++) {
			callback.call(scope, nodeList[i], i);
		}
	}
}
