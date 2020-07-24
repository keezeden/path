import { h } from "preact";
import { Cell } from "../cell";

const CELL_SIZE = 8;

const Grid = ({ useGrid, tool }) => {
  const [grid] = useGrid;
  return grid.map(row => (
    <div className="-mb-2">
      {row.map(cell => (
        <Cell useGrid={useGrid} tool={tool} cell={cell} size={CELL_SIZE} />
      ))}
    </div>
  ));
};

export { Grid };
