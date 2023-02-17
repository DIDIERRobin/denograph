import {shortestPathSingleWay} from './main.ts';
import {generateRandomGraph} from './random-graph.ts';
import Node from './Node.ts'

const nodes: Node[] = generateRandomGraph(1000000, 2)

Deno.bench("shortest path single way", () => {
    shortestPathSingleWay(nodes[0], nodes[nodes.length - 1])
})

Deno.bench("shortest path both way", () => {
    shortestPathSingleWay(nodes[0], nodes[nodes.length - 1])
})
