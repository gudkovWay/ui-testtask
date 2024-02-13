import { ComponentProps } from "react";
import { Icon } from "../component/Icon";

const fileExtensionToIconMap = new Map<string, ComponentProps<typeof Icon>["name"]>([
  ['js', 'js'],
  ['tsx', 'tsx'],
]);

export function checkExtenshion(fileName: string): ComponentProps<typeof Icon>["name"] {
  const fileExtension = fileName.split (".").pop() as string;
  return fileExtensionToIconMap.get(fileExtension) || "file";
}
