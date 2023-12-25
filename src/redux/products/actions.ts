import { createAction } from "@reduxjs/toolkit";

export const getProductListStorageAction = createAction<IFieldsPaginations>(
  "PRODUCTS/GET_PRODUCTS_LIST_STORAGE"
);

export const getProductListSiteAction = createAction<IFieldsPaginations>(
  "PRODUCTS/GET_PRODUCTS_LIST_SITE"
);

export const addProductAction = createAction<IProduct>("PRODUCTS/ADD_PRODUCT");

export const updateProductAction = createAction<IProduct>(
  "PRODUCTS/UPDATE_PRODUCT"
);

export const getAllCategoriesAction = createAction(
  "PRODUCTS/GET_ALL_CATEGORIES"
);

export const deleteProductFromSiteAction = createAction<{ id: string }>(
  "PRODUCTS/DELETE_PRODUCT_FROM_SITE"
);

export const addImagesForProductAction = createAction<FormData>(
  "PRODUCTS/ADD_IMAGES_FOR_PRODUCT"
);
