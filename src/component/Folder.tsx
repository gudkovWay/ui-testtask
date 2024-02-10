import React from "react";
import { FilesProps } from "../types";
import { File } from "./File";

export function Folder({
  items, selectedKey, onSelect
}: FilesProps) {
  const [expandedKeys, setExpandedKeys] = React.useState<number[]>([]);

  function onExpanded(id: number) {
    expandedKeys.includes(id)
      ? setExpandedKeys(expandedKeys.filter((key) => key !== id))
      : setExpandedKeys([...expandedKeys, id]);
  }

  return (
    <div className={items.id === selectedKey ? "folder selected" : "folder"} onClick={() => onSelect(items.id)}>
      <img src={expandedKeys.includes(items.id) ? "/folder-open.png" : "/folder.png"} alt="folder" className="treeimg" onClick={() => onExpanded(items.id)} />
      <span>{items.id}</span>
      <b> {items.name}</b>

      {
        expandedKeys.includes(items.id) &&
        items.children!.map((child) => (
          child.children ? (
            <Folder
              key={child.id}
              items={child}
              selectedKey={selectedKey}
              onSelect={onSelect}
            />
          )
            : (
              <File
                key={child.id}
                items={child}
                selectedKey={selectedKey}
                onSelect={onSelect}
              />
            ))
        )
      }
    </div>
  )
}
