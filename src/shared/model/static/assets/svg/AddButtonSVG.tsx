import { FC } from "react";
import { ISvgProps } from "./types";

export const AddButtonSVG: FC<ISvgProps> = ({
  width = "44",
  height = "44",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="22" fill="#223DCB" />
      <path
        d="M30 23.1429H23.1429V30H20.8571V23.1429H14V20.8571H20.8571V14H23.1429V20.8571H30V23.1429Z"
        fill="white"
      />
    </svg>
  );
};
