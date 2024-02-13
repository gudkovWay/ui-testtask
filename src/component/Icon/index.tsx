import React, { FC } from "react";
import cn from "classnames";
import {
  ChevronDown,
  ChevronRight,
  File,
  FolderClose,
  FolderOpen,
  Js,
  TSX,
} from "./icons";

import styles from "./Icon.module.css";


type IconName =
  | "chevron-down"
  | "chevron-right"
  | "file"
  | "folder-close"
  | "folder-open"
  | "js"
  | "tsx";
type IconSize = "sm" | "md";

const icons: Record<IconName, FC> = {
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  file: File,
  "folder-close": FolderClose,
  "folder-open": FolderOpen,
  js: Js,
  tsx: TSX,
};

const iconSizes: Record<IconSize, string> = {
  sm: styles.sm,
  md: styles.md,
};

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, size = "sm", className }) => {
  const IconComponent = icons[name];

  return IconComponent ? (
    <span className={cn(styles.icon, iconSizes[size], className)}>
      <IconComponent />
    </span>
  ) : null;
};
