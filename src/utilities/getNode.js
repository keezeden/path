const getNodeByEntity = grid => material => {
  const row = grid.map(row => row.filter(cell => cell.material === material));

  const [column] = row.filter(column => column.length > 0);
  const [cell] = column;

  return cell;
};

const getWalls = grid => {
  const walls = [];
  grid.map(row =>
    row.map(cell => {
      if (cell.material === "wall") walls.push(cell);
    })
  );

  return walls;
};

export { getNodeByEntity, getWalls };
