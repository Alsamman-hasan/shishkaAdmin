import { createAction } from "@reduxjs/toolkit";

export interface IFieldsLoginAction {
  email: string;
  password: string;
}

export const loginAction = createAction<IFieldsLoginAction>("PROFILE/LOGIN");

export const logOutAction = createAction("PROFILE/LOGOUT");
