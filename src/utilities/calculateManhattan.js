const manhattan = (node, end) =>
  Math.abs(node.row - end.row) + Math.abs(node.column - end.column);

export { manhattan };
