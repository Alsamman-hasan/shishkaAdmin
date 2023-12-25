import { Header } from "components/Header/Header";
import ProductList from "components/ProductList/ProductList";
import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AuthorizedRoutes } from "shared/model/utils/const/route";
import "./myStoragePage.scss";

const MyStoragePage: FC = () => {
  const { pathname } = useLocation();

  const typeProduct: TProduct = useMemo(
    () =>
      pathname === AuthorizedRoutes.MY_STORAGE_ROUTE ? "my-storage" : "site",
    [pathname]
  );
  return (
    <div className="page my-storage-page">
      <Header />
      <ProductList typeProduct={typeProduct} />
    </div>
  );
};

export default MyStoragePage;
