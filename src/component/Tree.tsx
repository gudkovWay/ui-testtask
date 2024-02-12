import { ItemsProps } from "../types";
import { checkExtenshion } from "../utils/check";
import { Icon } from "./Icon";

interface TreeProps {
  items: ItemsProps;
  expandedKeys: number[];
  selectedKey: number;

  onSelect: (id: number) => void;
  onExpand: (id: number) => void;
}

export function Tree({
  items,
  expandedKeys,
  selectedKey,
  onSelect,
  onExpand,
}: TreeProps) {

  return (
    <div className="tree">

      {
        items.children &&
        <div className="folder" onClick={() => onExpand(items.id)}>
          <Icon iconName={expandedKeys.includes(items.id) ? "folderOpen" : "folderClose"} />
          <b className={selectedKey === items.id ? "selected" : undefined} onClick={() => onSelect(items.id)}>{items.name} {items.id}</b>
        </div>
      }

      {
        !items.children &&
        <div className="file">
          <Icon iconName={checkExtenshion(items.name)} />
          <i className={selectedKey === items.id ? "selected" : undefined} onClick={() => onSelect(items.id)}>{items.name} {items.id}</i>
        </div>
      }

      {
        expandedKeys.includes(items.id) &&
        items.children?.map((item) => (
          <Tree
            key={item.id}
            items={item}
            expandedKeys={expandedKeys}
            selectedKey={selectedKey}
            onSelect={onSelect}
            onExpand={onExpand}
          />
        ))
      }

    </div>
  )

}
