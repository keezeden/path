import { h } from "preact";
import { Cell } from "../cell";

const CELL_SIZE = 8;

const Grid = ({ grid }) => {
  return grid.map(row => (
    <div className="-mb-2">
      {row.map(cell => (
        <Cell row={cell.row} column={cell.column} size={CELL_SIZE} />
      ))}
    </div>
  ));
};

export { Grid };
