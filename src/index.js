import { render, h } from "preact";
import { useState, useEffect } from "preact/hooks";

import { Header, Grid } from "./components";
import "./index.css";
import { aStar } from "./algorithms/astar";
import { getNode, getNodeByMaterial } from "./utilities/getNode";

const GRID_WIDTH = 30;
const GRID_HEIGHT = 15;

const columns = Array(GRID_WIDTH).fill();
const rows = Array(GRID_HEIGHT).fill();

const grid = rows.map((_, i) =>
  columns.map((_, j) => ({ row: i, column: j, material: "none" }))
);

const startAStar = () => {
  const get = getNodeByMaterial(grid);

  console.log("start result", get("start"));
  console.log("end result", get("end"));

  return aStar(get("start"), get("end"));
};

const App = () => {
  const [config, setConfig] = useState({
    algorithm: "a-star",
    tool: "wall",
    start: false
  });

  useEffect(() => {
    const { start, algorithm } = config;
    if (start) {
      console.log(`Running ${algorithm} algorithm`);
      switch (algorithm) {
        case "a-star":
          return startAStar();
      }
    }
  }, [config]);

  return (
    <div className="m-12 inline-block">
      <Header useConfig={[config, setConfig]} />
      <Grid tool={config.tool} grid={grid} />
    </div>
  );
};

render(<App />, document.body);
