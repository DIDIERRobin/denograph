import {shortestPathSingleWay} from './main.ts';
import {generateRandomGraph} from './random-graph.ts';
import Node from './Node.ts'



Deno.bench("shortest path single way", () => {
    const nodes: Node[] = generateRandomGraph(Math.random() * 100000, Math.random() * 5)
    shortestPathSingleWay(nodes[0], nodes[nodes.length - 1])
})

Deno.bench("shortest path both way", () => {
    const nodes: Node[] = generateRandomGraph(Math.random() * 100000, Math.random() * 5)
    shortestPathSingleWay(nodes[0], nodes[nodes.length - 1])
})
