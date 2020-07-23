import { h } from "preact";

const Selector = ({ useConfig }) => {
  const [config, setConfig] = useConfig;
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="w-6 h-6 bg-green-400"></div>
      <div className="w-6 h-6 bg-red-500"></div>
      <div className="w-6 h-6 bg-orange-400"></div>
    </div>
  );
};

export { Selector };
