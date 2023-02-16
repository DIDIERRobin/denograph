import Node from './Node.ts';

const nodes = [
    new Node('A'), // 0
    new Node('B'), // 1
    new Node('C'), // 2
    new Node('D'), // 3
    new Node('E'), // 4
    new Node('F'), // 5
    new Node('G'), // 6
    new Node('H'), // 7
    new Node('I'), // 8
    new Node('J'), // 9
]

nodes[0].addNode(nodes[1]);
nodes[0].addNode(nodes[3]);

nodes[1].addNode(nodes[0]);
nodes[1].addNode(nodes[4]);

nodes[2].addNode(nodes[3]);
nodes[2].addNode(nodes[4]);
nodes[2].addNode(nodes[5]);

nodes[3].addNode(nodes[0]);
nodes[3].addNode(nodes[2]);

nodes[4].addNode(nodes[1]);
nodes[4].addNode(nodes[2]);
nodes[4].addNode(nodes[5]);
nodes[4].addNode(nodes[6]);

nodes[5].addNode(nodes[2]);
nodes[5].addNode(nodes[4]);
nodes[5].addNode(nodes[6]);
nodes[5].addNode(nodes[7]);
nodes[5].addNode(nodes[8]);

nodes[6].addNode(nodes[4]);
nodes[6].addNode(nodes[5]);
nodes[6].addNode(nodes[7]);

nodes[7].addNode(nodes[5]);
nodes[7].addNode(nodes[6]);
nodes[7].addNode(nodes[9]);

nodes[8].addNode(nodes[5]);

nodes[9].addNode(nodes[7]);





