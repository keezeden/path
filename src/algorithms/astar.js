// const aStar = (start, end, useGrid) => {
//   const [grid, setGrid] = useGrid;

import { same } from "../utilities/areNodesSame";
import { manhattan } from "../utilities/calculateManhattan";
import { min } from "../utilities/getMin";

const { total } = require("../utilities/getTotalCost");

//   const closedNodes = [];
//   const openNodes = [start];

//   while (openNodes.length > 0) {
//     const totals = openNodes.map(node => ({ ...node, total: total(node) }));

//     const shortest = min(totals, "total");

//     const item = openNodes.find(node => same(node, shortest));

//     openNodes.splice(openNodes.indexOf(item), 1);

//     const offSets = [1, 0, -1];

//     const children = offSets.map(rowOffset =>
//       offSets.map(columnOffset => {
//         const child = {
//           parent: shortest,
//           row: shortest.row + rowOffset,
//           column: shortest.column + columnOffset,
//           material: "successor"
//         };

//         return child;
//       })
//     );

//     openNodes.length = 0;
//     children.map(row => row.map(child => openNodes.push(child)));

//     openNodes.map(node => {
//       if (same(shortest, end)) {
//         console.log("Solved", shortest);
//         openNodes.length = 0;
//       }

//       node.costToStart = shortest.costToStart + 1;
//       node.costToEnd = manhattan(node, end);
//       node.total = total(node);
//     });

//     closedNodes.push(shortest);
//   }
// };

// export { aStar };

const init = node => {
  if (!node.toStart) node.toStart = 0;
  if (!node.toEnd) node.toEnd = 0;
  if (!node.total) node.total = total(node);
  return node;
};

const offsets = [1, 0, -1];

const aStar = (start, walls, end) => {
  const candidates = [];
  const closed = [];
  const open = [start];

  while (open.length > 0) {
    const totals = open.map(node => init(node));

    const best = min(totals, "toEnd");

    console.log("Best was", best.toEnd);

    const item = open.find(node => same(node, best));

    open.splice(open.indexOf(item), 1);

    const children = offsets.map(i =>
      offsets.map(j => ({
        parent: best,
        row: best.row + i,
        column: best.column + j
      }))
    );

    open.length = 0;
    children.map(row =>
      row.map(col => {
        //if (walls.some(wall => same(wall, col)))
        //return console.log("This nigga overlappin");
        open.push(col);
        candidates.push(col);
      })
    );

    open.map(node => {
      if (same(best, end)) open.length = 0;

      node.toStart = best.toStart + 1;
      node.toEnd = manhattan(node, end);
      node.total = total(node);
    });

    console.log("Best was", best);
    closed.push(best);
  }
  console.log("Finished Astar algorithm!");
  return [closed, candidates];
};

export { aStar };
