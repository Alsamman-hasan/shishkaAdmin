import { postRPC, postRPCFormData } from "../api";
import urls from "../api/urls";

export const getProductListStorageRequest = (payload: IFieldsPaginations) =>
  postRPC({ method: urls.product.getStorageProducts, params: payload });

export const getProductListSiteRequest = (payload: IFieldsPaginations) =>
  postRPC({ method: urls.product.getSiteProducts, params: payload });

export const addProductRequest = (payload: IProduct) =>
  postRPC({ method: urls.product.addProduct, params: payload });

export const updateProductRequest = (payload: IProduct) =>
  postRPC({ method: urls.product.updateProduct, params: payload });

export const getAllCategoriesRequest = () =>
  postRPC({ method: urls.product.getAllCategories });

export const deleteProductFromSiteRequest = (payload: { id: string }) =>
  postRPC({ method: urls.product.deleteProduct, params: payload });

export const addImagesForProductRequest = (payload: FormData) =>
  postRPCFormData(payload);
