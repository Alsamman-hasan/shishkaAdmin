import { FC } from "react";
import { ISvgProps } from "./types";

export const CloseSVG: FC<ISvgProps> = ({
  width = "32",
  height = "32",
  fill = "#B3B3B3",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.6674 6.27596L25.7807 4.39062L16.0581 14.1146L6.33405 4.39062L4.44739 6.27596L14.1714 16L4.44739 25.724L6.33405 27.6093L16.0581 17.8853L25.7807 27.6093L27.6674 25.724L17.9434 16L27.6674 6.27596Z"
        fill={fill}
      />
    </svg>
  );
};
