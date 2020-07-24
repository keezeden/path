import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { materialToColor } from "../../utilities/materialToColor";

const Cell = ({ cell, tool, size }) => {
  const [isMousedOver, setMousedOver] = useState(false);

  const classList = [
    "select-none",
    "border",
    "border-gray-700",
    "inline-block",
    `w-${size}`,
    `h-${size}`
  ];

  if (isMousedOver) classList.push("bg-blue-200");

  const materialColor = materialToColor(cell.material);

  classList.push(`bg-${materialColor}-400`);

  const classes = classList.join(" ");

  const handleMouseOver = e => {
    const { buttons } = e;
    switch (buttons) {
      case 1:
        return (cell.material = tool);
      case 2:
        return (cell.material = "none");
      default:
        return setMousedOver(true);
    }
  };

  useEffect(() => {
    if (cell.material === "path") console.log("Im updating");
  }, [cell.material]);

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
