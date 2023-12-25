import React, { memo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ShowSnackbarT, SnackbarTypeT } from "./types";
import { toast, ToastContainer } from "react-toastify";
import Snackbar from "./Snackbar/Snackbar";

export const showSnackbar: ShowSnackbarT = (text: string, type?: SnackbarTypeT) =>
  type && toast[`${type}`](<Snackbar text={text} type={type} />);

const Snackbars = () => {
  return (
    <ToastContainer
      position="bottom-left"
      hideProgressBar
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      icon={false}
      closeButton={<button>X</button>}
    />
  );
};

export default memo(Snackbars);
