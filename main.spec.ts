import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';
import {breadthFirstSearch, depthFirstSearch, shortestPath} from './main.ts';
import nodes from './someGraph.ts';

Deno.test('breadthFirstSearch', () => {
    assertEquals(breadthFirstSearch(nodes['A']).map(a => a.key),
        ['A', 'B', 'D', 'E', 'C', 'F', 'G', 'H', 'I', 'J']);
})

Deno.test('depthFirstSearch', () => {
    assertEquals(depthFirstSearch(nodes['A']).map(a => a.key),
        ['A', 'B', 'E', 'C', 'D', 'F', 'G', 'H', 'J', 'I']);
})

Deno.test('shortestPath', () => {
    // assertEquals(shortestPath(nodes['A'], nodes['B']).map(a => a.key), ['A', 'B']);
    // assertEquals(shortestPath(nodes['A'], nodes['C']).map(a => a.key), ['A', 'D', 'C']);
    assertEquals(shortestPath(nodes['A'], nodes['J']).map(a => a.key), ['A', 'B', 'E', 'G', 'H', 'J']);
})
