export type ItemsProps = {
  id: number;
  name: string;
  children?: ItemsProps[];
}

export interface FilesProps {
  items: ItemsProps;
  selectedKey: number | undefined;
  onSelect: (id: number) => void;
}
