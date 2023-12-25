import React, { FC, memo } from "react";
import "./snackbar.scss";
import { SnackbarPT } from "./types";

const Snackbar: FC<SnackbarPT> = ({ text }) => {
  return (
    <div className="snackbar">
      <p>{text}</p>
    </div>
  );
};

export default memo(Snackbar);
