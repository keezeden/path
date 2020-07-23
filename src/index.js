import { render, h } from "preact";
import { useState, useEffect } from "preact/hooks";

import "./index.css";
import { Header, Grid } from "./components";

const GRID_WIDTH = 30;
const GRID_HEIGHT = 15;

const columns = Array(GRID_WIDTH).fill();
const rows = Array(GRID_HEIGHT).fill();

const grid = rows.map((_, i) => columns.map((_, j) => ({ row: i, column: j })));

const App = () => {
  const [config, setConfig] = useState({
    algorithm: "a-star"
  });

  useEffect(() => {
    console.log("Config updated: ", config);
  }, [config]);

  return (
    <div className="m-12 inline-block">
      <Header useConfig={[config, setConfig]} />
      <Grid grid={grid} />
    </div>
  );
};

render(<App />, document.body);
