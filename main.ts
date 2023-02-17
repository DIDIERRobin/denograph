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

// BFS algorithm a bit modify, storing parent to be able to construct back shortest path
export const shortestPathSingleWay = (from: Node, to: Node): Node[] => {
    const predecessors: Record<string, Node | null> = {};
    const queue: Node[] = [];
    const visited: Record<string, boolean> = {};
    visited[from.key] = true;
    predecessors[from.key] = null;
    queue.push(from);
    while (queue.length) {
        const parent: Node = queue.shift()!
        for (const child of parent.links) {
            if (!visited[child.key]) {
                visited[child.key] = true
                predecessors[child.key] = parent;
                queue.push(child)
                if (child.isSameNode(to)) {
                    let result: Node[] = [child];
                    let current = predecessors[child.key];
                    while (current) {
                        result = [current, ...result]
                        current = predecessors[current.key];
                    }
                    return result;
                }
            }
        }
    }
    return []
}

// same principle as shortestPathSingleWay, but trying to solve it from both side as the same time for performance.
export const shortestPathBothWay = (from: Node, to: Node): Node[] => {
    const predecessors: Record<string, Node | null> = {};
    const queue: { node: Node, fromLeft: boolean }[] = [];
    const leftVisited: Record<string, boolean> = {};
    leftVisited[from.key] = true;
    const rightVisited: Record<string, boolean> = {};
    rightVisited[to.key] = true;
    predecessors[from.key] = null;
    predecessors[to.key] = null;
    queue.push({node: from, fromLeft: true});
    queue.push({node: to, fromLeft: false});
    while (queue.length) {
        const parentO = queue.shift()!;
        const parent: Node = parentO.node
        const visited = parentO.fromLeft ? leftVisited : rightVisited;
        const otherVisited = parentO.fromLeft ? rightVisited : leftVisited;
        for (const child of parent.links) {
            if (otherVisited[child.key]) {
                let result: Node[] = [];
                let current = child;
                while (current) {
                    if (parentO.fromLeft) {
                        result.push(current)
                    } else {
                        result.unshift(current)
                    }
                    current = predecessors[current.key]!;
                }
                current = parent;
                while (current) {
                    if (!parentO.fromLeft) {
                        result.push(current)
                    } else {
                        result.unshift(current)
                    }
                    current = predecessors[current.key]!;
                }
                return result;
            }
            if (!visited[child.key]) {
                visited[child.key] = true
                predecessors[child.key] = parent;
                queue.push({node: child, fromLeft: parentO.fromLeft})
            }
        }
    }
    return []
}
