export default class Node {
    key: string;
    links: Node[];

    constructor(key: string) {
        this.key = key;
        this.links = [];
    }

    addNode(node: Node) {
        this.links.push(node);
    }

    removeNode(node: Node) {
        this.links = this.links.filter(link => link.key !== node.key);
    }

    isLinked(node: Node) {
        return this.links.find(link => link.key === node.key) !== undefined;
    }

    isSameNode(node: Node) {
        return node && (this.key === node.key);
    }

    toString() {
        return this.key
    }
}
