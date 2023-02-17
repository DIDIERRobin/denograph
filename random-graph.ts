
import Node from './Node.ts'

const randomNumbersInsideRange = (nbr: number, max: number): number[] => {
    const result: number[] = [];
    let current: number;
    for (let i = 0; i < nbr; i++) {
        do {
            current = Math.floor(Math.random() * max);
        } while (result.includes(current))
        result.push(current);
    }
    return result;
}

export const generateRandomGraph = (nbrNodes: number, nbrMaxLink: number): Node[] => {
    const nodes: Node[] = [];
    for (let i = 0; i < nbrNodes; i++) {
        nodes.push(new Node('Node-' + i))
    }
    nodes.forEach(node => {
        const randomLinks = randomNumbersInsideRange(Math.floor(Math.random() * nbrMaxLink), nbrNodes);
        randomLinks.forEach(index => {
            node.addNode(nodes[index])
        })
    })

    return nodes;
}
