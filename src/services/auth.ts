import { postRPC } from "../api";
import urls from "../api/urls";
import { IFieldsLoginAction } from "../redux/profile/actions";

export const loginRequest = (payload: IFieldsLoginAction) =>
  postRPC({ method: urls.auth.login, params: payload });

export const logoutRequest = () => postRPC({ method: urls.auth.logout });
