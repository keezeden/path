import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { materialToColor } from "../../utilities/materialToColor";

const Cell = ({ useGrid, cell, tool, size }) => {
  const [grid, setGrid] = useGrid;
  const { row, column, material } = cell;

  const [isMousedOver, setMousedOver] = useState(false);

  const materialColor = materialToColor(material);

  const classList = [
    "select-none",
    "border",
    "border-gray-700",
    "inline-block",
    `bg-${materialColor}-400`,
    `w-${size}`,
    `h-${size}`
  ];

  const updateMaterial = materialBuffer => {
    const gridCopy = [...grid];
    gridCopy[row][column].material = materialBuffer;
    setGrid(gridCopy);
  };

  if (isMousedOver) classList.push("bg-blue-200");

  const classes = classList.join(" ");

  const handleMouseOver = e => {
    const { buttons } = e;
    switch (buttons) {
      case 1:
        return updateMaterial(tool);
      case 2:
        return updateMaterial("none");
      default:
        return setMousedOver(true);
    }
  };

  const handleMouseLeave = () => setMousedOver(false);
  const handleContextMenu = e => e.preventDefault();

  return (
    <div
      onContextMenu={handleContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseOver}
      className={classes}
    >
      {cell.text}
    </div>
  );
};

export { Cell };
