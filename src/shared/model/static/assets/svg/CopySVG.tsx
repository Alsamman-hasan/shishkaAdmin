import React, { FC } from "react";
import { ISvgProps } from "./types";

export const CopySVG: FC<ISvgProps> = ({ width = "15", height = "15" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.43937 2.89188L3.4375 4.21875V10.7838C3.4375 11.3225 3.65151 11.8391 4.03244 12.2201C4.41337 12.601 4.93003 12.815 5.46875 12.815H10.8537C10.7567 13.0892 10.5771 13.3266 10.3396 13.4945C10.1021 13.6623 9.81836 13.7525 9.5275 13.7525H5.46875C4.68139 13.7525 3.92628 13.4397 3.36953 12.883C2.81278 12.3262 2.5 11.5711 2.5 10.7838V4.21875C2.5 3.60625 2.89187 3.08438 3.43937 2.89188ZM11.0938 1.25C11.2784 1.25 11.4613 1.28637 11.6319 1.35704C11.8025 1.42772 11.9575 1.5313 12.0881 1.66188C12.2187 1.79246 12.3223 1.94749 12.393 2.1181C12.4636 2.28872 12.5 2.47158 12.5 2.65625V10.7813C12.5 10.9659 12.4636 11.1488 12.393 11.3194C12.3223 11.49 12.2187 11.645 12.0881 11.7756C11.9575 11.9062 11.8025 12.0098 11.6319 12.0805C11.4613 12.1511 11.2784 12.1875 11.0938 12.1875H5.46875C5.09579 12.1875 4.7381 12.0393 4.47438 11.7756C4.21066 11.5119 4.0625 11.1542 4.0625 10.7813V2.65625C4.0625 2.28329 4.21066 1.9256 4.47438 1.66188C4.7381 1.39816 5.09579 1.25 5.46875 1.25H11.0938ZM11.0938 2.1875H5.46875C5.34443 2.1875 5.2252 2.23689 5.13729 2.32479C5.04939 2.4127 5 2.53193 5 2.65625V10.7813C5 11.04 5.21 11.25 5.46875 11.25H11.0938C11.2181 11.25 11.3373 11.2006 11.4252 11.1127C11.5131 11.0248 11.5625 10.9056 11.5625 10.7813V2.65625C11.5625 2.53193 11.5131 2.4127 11.4252 2.32479C11.3373 2.23689 11.2181 2.1875 11.0938 2.1875Z"
        fill="black"
      />
    </svg>
  );
};