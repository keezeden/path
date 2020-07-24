import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { materialToColor } from "../../utilities/materialToColor";

const Cell = ({ cell, tool, size }) => {
  const { row, column } = cell;

  const [isMousedOver, setMousedOver] = useState(false);
  const [material, setMaterial] = useState("none");

  const classList = [
    "select-none",
    "border",
    "border-gray-700",
    "inline-block",
    `bg-${materialToColor(material)}-400`,
    `w-${size}`,
    `h-${size}`
  ];

  if (isMousedOver) classList.push("bg-blue-200");

  const classes = classList.join(" ");

  const handleMouseOver = e => {
    const { buttons } = e;
    switch (buttons) {
      case 1:
        return setMaterial(tool);
      case 2:
        return setMaterial("none");
      default:
        return setMousedOver(true);
    }
  };

  const handleMouseLeave = () => setMousedOver(false);
  const handleContextMenu = e => e.preventDefault();
  useEffect(() => {
    cell.material = material;
  }, [material]);

  return (
    <div
      onContextMenu={handleContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseOver}
      className={classes}
    ></div>
  );
};

export { Cell };
