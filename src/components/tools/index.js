import { h } from "preact";

const Tools = ({ useConfig }) => {
  const [config, setConfig] = useConfig;

  const handleSelectTool = tool => () =>
    setConfig(config => ({ ...config, tool }));

  return (
    <div className="grid grid-cols-3 gap-2">
      <div
        onClick={handleSelectTool("start")}
        className="w-6 h-6 bg-green-400"
      ></div>
      <div
        onClick={handleSelectTool("wall")}
        className="w-6 h-6 bg-orange-400"
      ></div>
      <div
        onClick={handleSelectTool("end")}
        className="w-6 h-6 bg-red-400"
      ></div>
    </div>
  );
};

export { Tools };
