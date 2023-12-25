import { FC, useCallback, useEffect, useMemo, useState } from "react";
import "./productList.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  defaultSortingModel,
  getColumnProductListSite,
  getColumnProductListStorage,
  useGetPaginationData,
} from "./helpers";
import { DataGrid } from "@mui/x-data-grid";
import {
  getProductListStorageAction,
  getProductListSiteAction,
  deleteProductFromSiteAction,
  updateProductAction,
} from "redux/products/actions";
import SearchInputInFilters from "shared/ui/Inputs/SearchInputInFilters/SearchInputInFilters";
import ProductModal from "components/ProductModal/ProductModal";
import { initialProduct } from "components/ProductModal/ModalContent/helpers";

const ProductList: FC<{ typeProduct: TProduct }> = ({ typeProduct }) => {
  const dispatch = useAppDispatch();

  const typeMyStorage = useMemo(
    () => typeProduct === "my-storage",
    [typeProduct]
  );

  const { isLoadingProduct } = useAppSelector((state) => state.product);
  const { currentProductList, currentPage, currentFindTotal, currentStep } =
    useGetPaginationData(typeMyStorage);

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(initialProduct());

  const handleModalClose = useCallback(
    () => setOpenModalAdd(false),
    [setOpenModalAdd]
  );

  const handleChangeProduct = useCallback((selectedProduct: IProduct) => {
    setSelectedProduct(selectedProduct);
    setOpenModalAdd(true);
  }, []);
  const hiddenClick = useCallback(
    (selectProduct: IProduct) => {
      dispatch(updateProductAction(selectProduct));
    },
    [dispatch]
  );
  const removeClick = useCallback(
    (productId: string) => {
      dispatch(deleteProductFromSiteAction({ id: productId }));
    },
    [dispatch]
  );

  const columns = useMemo(
    () =>
      typeMyStorage
        ? getColumnProductListStorage(handleChangeProduct)
        : getColumnProductListSite(
            handleChangeProduct,
            hiddenClick,
            removeClick
          ),
    [handleChangeProduct, hiddenClick, removeClick, typeMyStorage]
  );

  const [pageLocal, setPageLocal] = useState(currentPage - 1);
  const [stepLocal] = useState(currentStep);
  const [searchLocal, setSearchLocal] = useState("");

  const responseData = useMemo(() => {
    return searchLocal
      ? { page: pageLocal + 1, step: stepLocal, search: searchLocal }
      : { page: pageLocal + 1, step: stepLocal };
  }, [pageLocal, searchLocal, stepLocal]);

  useEffect(() => {
    dispatch(
      typeMyStorage
        ? getProductListStorageAction(responseData)
        : getProductListSiteAction(responseData)
    );
  }, [dispatch, responseData, typeMyStorage]);

  return (
    <div className="product-list">
      <div className="search">
        <SearchInputInFilters
          searchValue={searchLocal}
          setSearchValue={setSearchLocal}
          fullWidth
          placeholder="Поиск товара"
        />
      </div>
      <DataGrid
        rowHeight={76}
        rows={currentProductList}
        columns={columns}
        pageSize={stepLocal}
        loading={isLoadingProduct}
        rowsPerPageOptions={[stepLocal]}
        initialState={defaultSortingModel}
        autoHeight
        disableSelectionOnClick
        pagination
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        rowCount={currentFindTotal}
        paginationMode="server"
        page={pageLocal}
        onPageChange={(newPage) => setPageLocal(newPage)}
      />
      <ProductModal
        open={openModalAdd}
        handleModalClose={handleModalClose}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        typeProduct={typeProduct}
      />
    </div>
  );
};

export default ProductList;
