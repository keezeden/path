const materialToColor = material => {
  switch (material) {
    case "start":
      return "green";
    case "wall":
      return "orange";
    case "end":
      return "red";
    case "path":
      return "purple";
    case "candidate":
      return "pink";
    case "none":
      return "white";
    default:
      return "orange";
  }
};

export { materialToColor };
