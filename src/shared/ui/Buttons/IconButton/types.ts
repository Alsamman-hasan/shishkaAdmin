import { CSSProperties, FC, MouseEvent } from "react";
import { ISvgProps } from "shared/model/static/assets/svg/types";

export type IIConButton = "close" | "";

export interface IIconButtonButtonProps {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  picture: FC<ISvgProps>;
  text?: string;
  active?: boolean;
  style?: CSSProperties;
  link?: string;
  fill?: string;
}
