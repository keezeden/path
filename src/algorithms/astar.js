import { getNode, getNodeByPosition } from "../utilities/getNode";

// Get total 'f' value of a node
const total = node => node.costToStart || 0 + node.costToEnd || 0;

const manhattan = (node, end) =>
  Math.abs(node.row - end.row) + Math.abs(node.column - end.column);

// Compare 2 node positions
const same = (nodeA, nodeB) =>
  nodeA.row === nodeB.row && nodeA.column === nodeB.column;

// Get min total value from array
const min = (array, field) =>
  array.reduce((prev, curr) => {
    return prev[field] < curr[field] ? prev : curr;
  });

const aStar = (start, end, cost) => {
  const closedNodes = [];
  const openNodes = [start];

  while (openNodes.length > 0) {
    const totals = openNodes.map(node => ({ ...node, total: total(node) }));

    const shortest = min(totals, "total");

    const shortestRef = getNodeByPosition(shortest.row, shortest.column);
    shortestRef.material = "path";

    console.log("shortest", shortest);

    const item = openNodes.find(node => same(node, shortest));

    openNodes.splice(openNodes.indexOf(item), 1);

    const offSets = [1, 0, -1];

    const children = offSets.map(rowOffset =>
      offSets.map(columnOffset => {
        const child = {
          parent: shortest,
          row: shortest.row + rowOffset,
          column: shortest.column + columnOffset
        };

        console.log("Child", child);
        return child;
      })
    );

    openNodes.length = 0;
    children.map(row => row.map(child => openNodes.push(child)));

    openNodes.map(node => {
      if (same(shortest, end)) {
        console.log("lets go found it", shortest);
        openNodes.length = 0;
      }

      node.costToStart = shortest.costToStart + 1;
      node.costToEnd = manhattan(node, end);
      node.total = total(node);
    });

    closedNodes.push(shortest);
  }
};

export { aStar };
