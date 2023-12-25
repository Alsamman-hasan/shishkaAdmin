import { FC } from "react";
import { ISvgProps } from "./types";

export const LogOutSVG: FC<ISvgProps> = ({ width = "24", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 20C11 19.7348 10.8946 19.4804 10.7071 19.2929C10.5196 19.1054 10.2652 19 10 19H5V5H10C10.2652 5 10.5196 4.89464 10.7071 4.70711C10.8946 4.51957 11 4.26522 11 4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20Z"
        fill="#666666"
      />
      <path
        d="M21.714 12.7C21.8969 12.5141 21.9996 12.2638 22 12.003V11.997C21.9995 11.7328 21.8941 11.4796 21.707 11.293L17.707 7.29302C17.6148 7.19751 17.5044 7.12133 17.3824 7.06892C17.2604 7.01651 17.1292 6.98892 16.9964 6.98777C16.8636 6.98662 16.7319 7.01192 16.609 7.0622C16.4862 7.11248 16.3745 7.18673 16.2806 7.28062C16.1867 7.37452 16.1125 7.48617 16.0622 7.60907C16.0119 7.73196 15.9866 7.86364 15.9877 7.99642C15.9889 8.1292 16.0165 8.26042 16.0689 8.38242C16.1213 8.50443 16.1975 8.61477 16.293 8.70702L18.586 11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8947 8.73478 13 9 13H18.586L16.293 15.293C16.1108 15.4816 16.01 15.7342 16.0123 15.9964C16.0146 16.2586 16.1198 16.5094 16.3052 16.6948C16.4906 16.8802 16.7414 16.9854 17.0036 16.9877C17.2658 16.99 17.5184 16.8892 17.707 16.707L21.707 12.707L21.714 12.7Z"
        fill="#666666"
      />
    </svg>
  );
};
