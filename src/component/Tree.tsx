import React from 'react';
import { ItemsProps } from '../types';
import { File } from './File';
import { Folder } from './Folder';

interface TreeProps {
  items: ItemsProps
}

export function Tree({
  items,
}: TreeProps) {

  const [selectedKeys, setSelectedKeys] = React.useState<number>();

  function onSelected(id: number) {
    setSelectedKeys(id)
  }
  return (
    <div className="tree">
      {
        items.children ?
          <Folder
            items={items}
            selectedKey={selectedKeys}
            onSelect={onSelected}
          />
          : (
            <File
              items={items}
              selectedKey={selectedKeys}
              onSelect={onSelected}
            />
          )
      }

    </div>
  )
}
