import Node from './Node.ts'

export const breadthFirstSearch = (root: Node, reverse = false): Node[] => {
    const queue = [root]
    const result: Node[] = []
    const visited: Record<string, boolean> = {}

    while (queue.length) {
        const node = queue.shift()!
        if (!visited[node.key]) {
            result.push(node)
            visited[node.key] = true
            const children = reverse ? node.links.reverse() : node.links
            for (const child of children) {
                queue.push(child)
            }
        }
    }

    return result
}

export const depthFirstSearch = (root: Node): Node[] => {
    const result: Node[] = [];
    const visited: Record<string, boolean> = {};
    const __recc = (node: Node) => {
        if (visited[node.key]) {
            return
        } else {
            result.push(node)
            visited[node.key] = true;
            node.links.forEach(n => {
                __recc(n)
            })
        }
    }
    __recc(root);
    return result;
}

export const shortestPath = (from: Node, to: Node): Node[] => {

}
