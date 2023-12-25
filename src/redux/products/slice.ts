import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductListFields extends IFieldsPaginationsResponse {
  products: IProduct[];
}

export interface ProductListState {
  isLoadingProduct: boolean;
  error?: string;
  categories: {
    allCategories: string[];
    allGroups: {
      groupId: string;
      group: string;
    }[];
  };
  productsStorageData: IProductListFields;
  productsSiteData: IProductListFields;
}

const initialState: ProductListState = {
  isLoadingProduct: false,
  categories: {
    allCategories: [],
    allGroups: [],
  },
  productsStorageData: {
    page: 0,
    step: 8,
    pages: 1,
    found: 1,
    total: 1,
    products: [],
  },
  productsSiteData: {
    page: 0,
    step: 8,
    pages: 1,
    found: 1,
    total: 1,
    products: [],
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoadingProductSlice: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingProduct = payload;
    },
    setErrorProductSlice: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setAllCategoriesSlice: (state, { payload }: PayloadAction<ICategory[]>) => {
      const allCategories = payload.map((item) => item.category);
      const allGroups = payload
        .map((item) => item.groups && item.groups)
        .flat()
        .filter((item) => item) as {
        groupId: string;
        group: string;
      }[];

      state.categories.allCategories = allCategories;
      state.categories.allGroups = allGroups;
    },
    setProductListStorageSlice: (
      state,
      { payload }: PayloadAction<IProductListFields>
    ) => {
      state.productsStorageData = payload;
    },
    setProductListSiteSlice: (
      state,
      { payload }: PayloadAction<IProductListFields>
    ) => {
      state.productsSiteData = payload;
    },
    setClearProductsSlice: () => initialState,
  },
});

export const {
  setLoadingProductSlice,
  setErrorProductSlice,
  setAllCategoriesSlice,
  setProductListStorageSlice,
  setProductListSiteSlice,
  setClearProductsSlice,
} = productSlice.actions;

export const { reducer: productReducer } = productSlice;
