import React from 'react';
import { Tree } from './component/Tree';
import data from './data';

function App() {

  const [expandedKeys, setExpandedKeys] = React.useState<number[]>([])
  const [selectedKey, setSelectedKey] = React.useState<number>(-1)

  function onExpand(id: number) {
    expandedKeys.includes(id)
      ? setExpandedKeys(expandedKeys.filter((key) => key !== id))
      : setExpandedKeys([...expandedKeys, id]);
  }
  function onSelect(id: number) {
    selectedKey === id ? setSelectedKey(-1) : setSelectedKey(id)
  }

  return (
    <div className="App">
      {data.map((item) => (
        <Tree
          key={item.id}
          items={item}
          expandedKeys={expandedKeys}
          selectedKey={selectedKey}
          onSelect={onSelect}
          onExpand={onExpand}
        />
      ))}
    </div>
  );
}

export default App;
