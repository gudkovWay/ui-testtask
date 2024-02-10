import { FilesProps } from "../types";

function checkExtenshion({name}: {name: string}) {
  const tsxSource = "./tsx.png";
  const jsSource = "./js.png";
  const fileSource = "./file.png";
  const extenshion = name.split('.').at(-1);

  if (extenshion === 'js') {
    return jsSource; 
  } else if (extenshion === 'tsx') {
    return tsxSource;
  } else {
    return fileSource; 
  }
}

export function File({items, selectedKey, onSelect, }: FilesProps) {
  return (
    <div className={selectedKey === items.id ? "file selected" : "file"} onClick={() => onSelect(items.id)}>
      <img src={`${checkExtenshion({name: items.name})}`} alt="file icon"/>
      <b>{items.id} {items.name}</b>
    </div>
  )
}
