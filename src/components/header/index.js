import { h } from "preact";
import { Tools } from "../tools";

const Header = ({ useConfig }) => {
  const [config, setConfig] = useConfig;

  const handleSelectAlgorithm = e =>
    setConfig(config => ({ ...config, algorithm: e.target.value }));

  const handleStart = () => setConfig(config => ({ ...config, start: true }));

  const handleSelectSpeed = e =>
    setConfig(config => ({ ...config, speed: e.target.value }));

  return (
    <div className="py-4 px-6 grid grid-cols-4 border border-gray-700 rounded-t-lg">
      <div className="flex justify-center">
        <select
          placeholder="Algorithm"
          onChange={handleSelectAlgorithm}
          className="border border-gray-700 rounded-sm"
          name="algorithm"
        >
          <option selected disabled>
            Algorithms
          </option>
          <option value="a-star">A*</option>
          <option value="dijkstra">Dijkstra</option>
          <option value="depth-first">Depth-first</option>
          <option value="breadth-first">Breadth-first</option>
        </select>
      </div>
      <div className="flex justify-center">
        <input
          placeholder="Speed"
          onChange={handleSelectSpeed}
          type="number"
          name="speed"
          className="pl-2 border border-gray-700 rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <Tools useConfig={useConfig} />
        <p className="ml-2 w-2 capitalize">{config.tool}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleStart}
          className="px-2 border border-gray-700 rounded-sm"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export { Header };
