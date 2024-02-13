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
    <div className="col">

      {
        items.children &&
        <div className={selectedKey === items.id ? "wrapper selected" : "wrapper"} onClick={() => onExpand(items.id)}>
          <Icon name={expandedKeys.includes(items.id) ? "folder-open" : "folder-close"} />
          <p onClick={() => onSelect(items.id)}>{items.name} </p>
        </div>
      }

      {
        !items.children &&
        <div className={selectedKey === items.id ? "wrapper selected" : "wrapper"}>
          <Icon name={checkExtenshion(items.name)} />
          <p className={selectedKey === items.id ? "selected" : undefined} onClick={() => onSelect(items.id)}>{items.name}</p>
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
