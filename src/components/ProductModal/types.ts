import { Dispatch, SetStateAction } from "react";

export interface IProductModalProps {
  open: boolean;
  handleModalClose: () => void;
  typeProduct: TProduct;
  selectedProduct: IProduct;
  setSelectedProduct: Dispatch<SetStateAction<IProduct>>;
}

export interface IProductForRequest {
  category: string;
  groupId: string;
  label: TLabel;
  minPrice: number;
  id: string;
  sellingPrice?: number;
  description?: string;
  images?: string[];
}
