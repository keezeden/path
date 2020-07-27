// Get total 'f' value of a node
const total = node => node.costToStart || 0 + node.costToEnd || 0;

export { total };
