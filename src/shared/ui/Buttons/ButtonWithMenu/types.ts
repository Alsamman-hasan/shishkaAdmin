import { FC, CSSProperties } from "react";

export type ButtonWithMenuItemT = {
  name: string;
  onClick: () => void;
  Icon?: FC;
  loading?: boolean;
  border?: boolean;
  colorText?: string;
};

export type ButtonWithMenuPT = {
  items?: ButtonWithMenuItemT[];
  style?: CSSProperties;
};
