const getNode = grid => material => {
  const cell = grid.map(row =>
    row.map(column => column.filter(cell => cell.material === material))
  );

  return cell;
};

export { getNode };
