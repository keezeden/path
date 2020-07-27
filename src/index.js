import { render, h } from "preact";
import { useState, useEffect } from "preact/hooks";

import { Header, Grid } from "./components";
import "./index.css";
import { aStar } from "./algorithms/astar";
import { getNodeByEntity, getWalls } from "./utilities/getNode";

const GRID_WIDTH = 30;
const GRID_HEIGHT = 15;

const columns = Array(GRID_WIDTH).fill();
const rows = Array(GRID_HEIGHT).fill();

const GRID = rows.map((_, i) =>
  columns.map((_, j) => ({ row: i, column: j, material: "none" }))
);

const updateNode = (grid, node, config) => {
  const { row: x, column: y } = node;

  const copy = [...grid];
  copy[x][y] = { ...node, ...config };

  return copy;
};

const App = () => {
  const [grid, setGrid] = useState(GRID);
  const [config, setConfig] = useState({
    algorithm: "a-star",
    tool: "wall",
    start: false
  });

  const useGrid = [grid, setGrid];

  const runAStar = () => {
    const get = getNodeByEntity(grid);

    const start = get("start");
    const walls = getWalls(grid);
    const end = get("end");

    const [bests, candidates] = aStar(start, walls, end);

    console.log(bests, candidates);

    candidates.map(candidate =>
      setGrid(grid => updateNode(grid, candidate, { material: "candidate" }))
    );

    bests.map(best =>
      setGrid(grid => updateNode(grid, best, { material: "path" }))
    );

    setGrid(grid => updateNode(grid, start, { material: "start" }));
    setGrid(grid => updateNode(grid, end, { material: "end" }));
  };

  useEffect(() => {
    const { start, algorithm } = config;
    if (start) {
      console.log(`Running ${algorithm} algorithm`);
      switch (algorithm) {
        case "a-star":
          return runAStar();
      }
    }
  }, [config]);

  return (
    <div className="m-12 inline-block">
      <Header useConfig={[config, setConfig]} />
      <Grid tool={config.tool} useGrid={useGrid} />
    </div>
  );
};

render(<App />, document.body);
