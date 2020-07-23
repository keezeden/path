import { h } from "preact";
import { useState } from "preact/hooks";

const Cell = ({ tool, row, column, size }) => {
  const [isMousedOver, setMousedOver] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [toolUsed, setToolUsed] = useState(null);

  const classList = [
    "select-none",
    "border",
    "border-gray-700",
    "inline-block",
    `w-${size}`,
    `h-${size}`
  ];

  const toolToColor = tool => {
    switch (tool) {
      case "start":
        return "green";
      case "wall":
        return "orange";
      case "end":
        return "red";
      default:
        return "orange";
    }
  };

  if (isMousedOver) classList.push("bg-blue-200");
  if (isClicked) classList.push(`bg-${toolToColor(toolUsed)}-400`);

  const classes = classList.join(" ");

  const handleMouseOver = e => {
    const { buttons } = e;
    switch (buttons) {
      case 1:
        setToolUsed(tool);
        return setClicked(true);
      case 2:
        return setClicked(false);
      default:
        return setMousedOver(true);
    }
  };

  const handleMouseLeave = () => setMousedOver(false);

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseOver}
      className={classes}
    ></div>
  );
};

export { Cell };
