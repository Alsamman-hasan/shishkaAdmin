import {
  mockProductListStorage,
  mockProductListSite,
} from "./mockData/mockProductList";

const mockData = {
  product: {
    getProductListStorageMock: mockProductListStorage,
    getProductListSiteMock: mockProductListSite,
  },
};

export { mockData };
