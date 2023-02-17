import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';
import {breadthFirstSearch, depthFirstSearch, shortestPathBothWay, shortestPathSingleWay} from './main.ts';
import nodes from './someGraph.ts';

Deno.test('breadthFirstSearch', () => {
    assertEquals(breadthFirstSearch(nodes['A']).map(a => a.key),
        ['A', 'B', 'D', 'E', 'C', 'F', 'G', 'H', 'I', 'J']);
})

Deno.test('depthFirstSearch', () => {
    assertEquals(depthFirstSearch(nodes['A']).map(a => a.key),
        ['A', 'B', 'E', 'C', 'D', 'F', 'G', 'H', 'J', 'I']);
})

Deno.test('shortestPathSingleWay', () => {
    assertEquals(shortestPathSingleWay(nodes['A'], nodes['B']).map(a => a.key), ['A', 'B']);
    assertEquals(shortestPathSingleWay(nodes['A'], nodes['C']).map(a => a.key), ['A', 'D', 'C']);
    assertEquals(shortestPathSingleWay(nodes['A'], nodes['J']).map(a => a.key), ['A', 'B', 'E', 'F', 'H', 'J']);
    assertEquals(shortestPathSingleWay(nodes['D'], nodes['G']).map(a => a.key), ['D', 'C', 'F', 'G']);
    assertEquals(shortestPathSingleWay(nodes['F'], nodes['J']).map(a => a.key), ['F', 'H', 'J']);
})

Deno.test('shortestPathBothWay', () => {
    assertEquals(shortestPathBothWay(nodes['A'], nodes['B']).map(a => a.key), ['A', 'B']);
    assertEquals(shortestPathBothWay(nodes['A'], nodes['C']).map(a => a.key), ['A', 'D', 'C']);
    assertEquals(shortestPathBothWay(nodes['A'], nodes['J']).map(a => a.key), ['A', 'B', 'E', 'F', 'H', 'J']);
    assertEquals(shortestPathBothWay(nodes['D'], nodes['G']).map(a => a.key), ['D', 'C', 'F', 'G']);
    assertEquals(shortestPathBothWay(nodes['F'], nodes['J']).map(a => a.key), ['F', 'H', 'J']);
})
