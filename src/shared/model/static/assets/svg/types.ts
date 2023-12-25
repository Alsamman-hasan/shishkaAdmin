import { CSSProperties } from "react";

export interface ISvgProps {
  width?: string;
  height?: string;
  fill?: string;
  style?: CSSProperties;
  type?: "origin" | "alternative";
}
