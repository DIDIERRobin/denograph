export default class Node<T> {
    key: T;
    links: Node<T>[];

    constructor(key: T) {
        this.key = key;
        this.links = [];
    }

    addNode(node: Node<T>) {
        this.links.push(node);
    }

    removeNode(node: Node<T>) {
        this.links = this.links.filter(link => link.key !== node.key);
    }

    isLinked(node: Node<T>) {
        return this.links.find(link => link.key === node.key) !== undefined;
    }
}
