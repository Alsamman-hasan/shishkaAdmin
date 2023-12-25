import { put, takeEvery } from "redux-saga/effects";
import { IFieldsLoginAction, loginAction, logOutAction } from "./actions";
import {
  setLoadingAuthSlice,
  setIsAuthSlice,
  setUserSlice,
  setErrorAuthSlice,
  setUserLogoutSlice,
} from "./slice";
import { loginRequest, logoutRequest } from "../../services/auth";
import { showSnackbar } from "../../components/Snackbars/Snackbars";
import { PayloadAction } from "@reduxjs/toolkit";
import { errorHandling } from "shared/model/utils/helpers/errorHandling";

function* workerCheckAuth({ payload }: PayloadAction<IFieldsLoginAction>) {
  try {
    yield put(setLoadingAuthSlice(true));
    const response: IResponse<IProfile> = yield loginRequest(payload);

    if (response.data.result) {
      yield put(setErrorAuthSlice(""));
      yield put(setUserSlice(response.data.result));
      yield put(setIsAuthSlice(true));
    }

    if (response.data.error) {
      yield put(setErrorAuthSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
      yield put(setIsAuthSlice(false));
    }

    yield put(setLoadingAuthSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingAuthSlice(false));
    yield put(setIsAuthSlice(false));
  }
}

export function* watcherCheckAuth() {
  yield takeEvery(loginAction.toString(), workerCheckAuth);
}

function* workerLogOut() {
  try {
    yield put(setLoadingAuthSlice(true));
    const response: IResponse<IProfile> = yield logoutRequest();

    if (response.data.result) {
      yield put(setUserLogoutSlice());
    }

    if (response.data.error) {
      yield put(setErrorAuthSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }

    yield put(setLoadingAuthSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingAuthSlice(false));
  }
}

export function* watcherLogOut() {
  yield takeEvery(logOutAction.toString(), workerLogOut);
}
