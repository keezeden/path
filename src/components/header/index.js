import { h } from "preact";

const Header = ({ useConfig }) => {
  const [config, setConfig] = useConfig;

  const handleSelectAlgorithm = e =>
    setConfig(config => ({ ...config, algorithm: e.target.value }));

  return (
    <div className="py-4 px-6 border border-gray-700 rounded-t-lg">
      <h2>Algorithm:</h2>
      <select
        onChange={handleSelectAlgorithm}
        className="border border-gray-700 rounded-sm"
        name="algorithm"
      >
        <option value="a-star">A*</option>
        <option value="dijkstra">Dijkstra</option>
        <option value="depth-first">Depth-first</option>
        <option value="breadth-first">Breadth-first</option>
      </select>
    </div>
  );
};

export { Header };
