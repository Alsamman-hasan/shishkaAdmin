import axios from "axios";
import { showSnackbar } from "components/Snackbars/Snackbars";

export const errorHandling = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const customError = error.response as IResponse<IErrorMessage>;
    if (customError.data.error)
      showSnackbar(customError.data.error.error, "error");
  } else {
    throw new Error("error", error as ErrorOptions);
  }
};
