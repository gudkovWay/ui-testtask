import { Tree } from './component/Tree';
import data from './data';

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Tree
          key={item.id}
          items={item}
        />
      ))}
    </div>
  );
}

export default App;
