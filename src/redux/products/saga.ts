import { put, takeEvery } from "redux-saga/effects";
import {
  addImagesForProductAction,
  addProductAction,
  deleteProductFromSiteAction,
  getAllCategoriesAction,
  getProductListSiteAction,
  getProductListStorageAction,
  updateProductAction,
} from "./actions";
import {
  setLoadingProductSlice,
  IProductListFields,
  setErrorProductSlice,
  setProductListStorageSlice,
  setProductListSiteSlice,
  setAllCategoriesSlice,
} from "./slice";
import { showSnackbar } from "../../components/Snackbars/Snackbars";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addImagesForProductRequest,
  addProductRequest,
  deleteProductFromSiteRequest,
  getAllCategoriesRequest,
  getProductListSiteRequest,
  getProductListStorageRequest,
  updateProductRequest,
} from "services/product";
import { errorHandling } from "shared/model/utils/helpers/errorHandling";

function* workerGetProductListStorage({
  payload,
}: PayloadAction<IFieldsPaginations>) {
  try {
    yield put(setLoadingProductSlice(true));
    const response: IResponse<IProductListFields> =
      yield getProductListStorageRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(setProductListStorageSlice(response.data.result));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }

    yield put(setLoadingProductSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherGetProductListStorage() {
  yield takeEvery(
    getProductListStorageAction.toString(),
    workerGetProductListStorage
  );
}

function* workerGetProductListSite({
  payload,
}: PayloadAction<IFieldsPaginations>) {
  try {
    yield put(setLoadingProductSlice(true));
    const response: IResponse<IProductListFields> =
      yield getProductListSiteRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(setProductListSiteSlice(response.data.result));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }

    yield put(setLoadingProductSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherGetProductListSite() {
  yield takeEvery(
    getProductListSiteAction.toString(),
    workerGetProductListSite
  );
}

function* workerAddProduct({ payload }: PayloadAction<IProduct>) {
  try {
    yield put(setLoadingProductSlice(true));
    const response: IResponse<IProduct> = yield addProductRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(getProductListStorageAction({ page: 1, step: 8 }));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }

    yield put(setLoadingProductSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherAddProduct() {
  yield takeEvery(addProductAction.toString(), workerAddProduct);
}

function* workerUpdateProduct({ payload }: PayloadAction<IProduct>) {
  try {
    yield put(setLoadingProductSlice(true));
    const response: IResponse<IProduct> = yield updateProductRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(getProductListSiteAction({ page: 1, step: 8 }));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }

    yield put(setLoadingProductSlice(false));
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherUpdateProduct() {
  yield takeEvery(updateProductAction.toString(), workerUpdateProduct);
}

function* workerGetAllCategories() {
  try {
    const response: IResponse<ICategory[]> = yield getAllCategoriesRequest();

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(setAllCategoriesSlice(response.data.result));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherGetAllCategories() {
  yield takeEvery(getAllCategoriesAction.toString(), workerGetAllCategories);
}

function* workerDeleteProductFromSite({
  payload,
}: PayloadAction<{ id: string }>) {
  try {
    const response: IResponse<{ result: "string" }> =
      yield deleteProductFromSiteRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
      yield put(getProductListSiteAction({ page: 1, step: 8 }));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherDeleteProductFromSite() {
  yield takeEvery(
    deleteProductFromSiteAction.toString(),
    workerDeleteProductFromSite
  );
}

function* workerAddImagesForProduct({ payload }: PayloadAction<FormData>) {
  try {
    const response: IResponse<{ result: "string" }> =
      yield addImagesForProductRequest(payload);

    if (response.data.result) {
      yield put(setErrorProductSlice(""));
    }

    if (response.data.error) {
      yield put(setErrorProductSlice(response.data.error.error));
      showSnackbar(response.data.error.error, "error");
    }
  } catch (error) {
    errorHandling(error);
    yield put(setLoadingProductSlice(false));
  }
}

export function* watcherAddImagesForProduct() {
  yield takeEvery(
    addImagesForProductAction.toString(),
    workerAddImagesForProduct
  );
}
