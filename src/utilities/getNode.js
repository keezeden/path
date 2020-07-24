const getNodeByMaterial = grid => material => {
  const row = grid.map(row => row.filter(cell => cell.material === material));

  const [column] = row.filter(column => column.length > 0);
  const [cell] = column;

  return cell;
};

const getNodeByPosition = grid => (rowToFind, columnToFind) => {
  const row = grid.map(row =>
    row.filter(cell => cell.row === rowToFind && cell.column === columnToFind)
  );

  const [column] = row.filter(column => column.length > 0);
  const [cell] = column;

  return cell;
};

export { getNodeByMaterial, getNodeByPosition };
