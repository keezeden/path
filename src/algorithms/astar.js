const aStar = (start, goal, cost) => {
  const startNode = { ...start, costToStart: 0, costToEnd: 0 };
  const closedNodes = [];
  const openNodes = [startNode];

  // Get total 'f' value of a node
  const total = node => node.costToStart + node.costToEnd;

  const same = (nodeA, nodeB) =>
    nodeA.row === nodeB.row && nodeA.column === nodeB.column;

  // Get min value from array with optional pre-map
  const min = (array, map = val => val) => Math.min.apply(Math, array.map(map));

  while (openNodes.length > 0) {
    const shortest = min(openNodes, node => total(node));

    const item = openNodes.find(node => same(node, shortest));

    openNodes.splice(openNodes.indexOf(item), 1);

    const offSets = [1, 0, -1];
    const children = offSets.map(rowOffset =>
      offSets.map(columnOffset => ({
        row: shortest.row + rowOffset,
        column: shortest.column + columnOffset
      }))
    );

    const openNodes = [...children];

    console.log({ openNodes });

    if (shortest.row === start.row && shortest.column === start / column) {
    }
  }
};

export { aStar };
