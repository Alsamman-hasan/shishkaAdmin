import { Tooltip } from "@mui/material";
import { GridColDef, GridSortItem } from "@mui/x-data-grid";
import { useAppSelector } from "hooks/redux";
import { AddButtonSVG } from "shared/model/static/assets/svg";
import ButtonWithMenu from "shared/ui/Buttons/ButtonWithMenu/ButtonWithMenu";
import IconButton from "shared/ui/Buttons/IconButton/IconButton";

export const defaultSortingModel = {
  sorting: {
    sortModel: [{ field: "createdAt", sort: "desc" }] as GridSortItem[],
  },
};

export const useGetPaginationData = (typeMyStorage: boolean) => {
  const currentProductList = useAppSelector((state) =>
    typeMyStorage
      ? state.product.productsStorageData.products
      : state.product.productsSiteData.products
  );
  const currentPage = useAppSelector((state) =>
    typeMyStorage
      ? state.product.productsStorageData.page
      : state.product.productsSiteData.page
  );
  const currentStep = useAppSelector((state) =>
    typeMyStorage
      ? state.product.productsStorageData.step
      : state.product.productsSiteData.step
  );
  const currentFindTotal = useAppSelector((state) =>
    typeMyStorage
      ? state.product.productsStorageData.found
      : state.product.productsSiteData.found
  );

  return { currentProductList, currentPage, currentFindTotal, currentStep };
};

export const getColumnProductListStorage = (
  add: (selectedProduct: IProduct) => void
): GridColDef<IProduct>[] => {
  return [
    {
      field: "name",
      headerName: "Наименование",
      width: 170,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.name} arrow>
          <p className="name" style={{ paddingLeft: "0.5rem" }}>
            {params.row.name}
          </p>
        </Tooltip>
      ),
    },
    {
      field: "code",
      headerName: "Код",
      width: 70,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.code} arrow>
          <p className="code">{params.row.code}</p>
        </Tooltip>
      ),
    },
    {
      field: "externalCode",
      headerName: "Внешний код",
      width: 95,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.externalCode} arrow>
          <p className="externalCode">{params.row.externalCode}</p>
        </Tooltip>
      ),
    },
    {
      field: "description",
      headerName: "Описание",
      width: 220,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.description} arrow>
          <p className="description">{params.row.description}</p>
        </Tooltip>
      ),
    },
    {
      field: "quantity",
      headerName: "Количество",
      width: 90,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.qty} arrow>
          <p className="quantity">{`${params.row.qty} шт.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "salePrice",
      headerName: "Цена продажи",
      width: 100,
      sortable: false,
      hideSortIcons: true,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.sellingPrice} arrow>
          <p className="salePrice">{`${params.row.sellingPrice} ₽.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "minPrice",
      headerName: "Минимальная цена",
      width: 130,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.minPrice} arrow>
          <p className="minPrice">{`${params.row.minPrice} ₽.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "label",
      headerName: "",
      width: 70,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => add(params.row)} picture={AddButtonSVG} />
      ),
    },
  ];
};

export const getColumnProductListSite = (
  edit: (selectedProduct: IProduct) => void,
  hidden: (selectProduct: IProduct) => void,
  remove: (productId: string) => void
): GridColDef<IProduct>[] => {
  return [
    {
      field: "image",
      headerName: "",
      width: 80,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row.images ? params.row.images[0].url : ""}
          width={60}
          height={47}
          alt=""
          className="image"
        />
      ),
    },
    {
      field: "name",
      headerName: "Наименование",
      width: 170,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.name} arrow>
          <p className="name">{params.row.name}</p>
        </Tooltip>
      ),
    },
    {
      field: "code",
      headerName: "Код",
      width: 70,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.code} arrow>
          <p className="code">{params.row.code}</p>
        </Tooltip>
      ),
    },
    {
      field: "externalCode",
      headerName: "Внешний код",
      width: 95,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.externalCode} arrow>
          <p className="externalCode">{params.row.externalCode}</p>
        </Tooltip>
      ),
    },
    {
      field: "description",
      headerName: "Описание",
      width: 170,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.description} arrow>
          <p className="description">{params.row.description}</p>
        </Tooltip>
      ),
    },
    {
      field: "quantity",
      headerName: "Количество",
      width: 90,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.qty} arrow>
          <p className="quantity">{`${params.row.qty} шт.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "salePrice",
      headerName: "Цена продажи",
      width: 100,
      sortable: false,
      hideSortIcons: true,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.sellingPrice} arrow>
          <p className="salePrice">{`${params.row.sellingPrice} ₽.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "minPrice",
      headerName: "Минимальная цена",
      width: 100,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.minPrice} arrow>
          <p className="minPrice">{`${params.row.minPrice} ₽.`}</p>
        </Tooltip>
      ),
    },
    {
      field: "discountedPrice",
      headerName: "Цена со скидкой",
      width: 100,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip id="tooltip-table" title={params.row.discountPrice} arrow>
          <p className="discountedPrice">
            {params.row.discountPrice ? `${params.row.discountPrice} ₽.` : "-"}
          </p>
        </Tooltip>
      ),
    },
    {
      field: "category",
      headerName: "Категории",
      width: 120,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => (
        <Tooltip
          id="tooltip-table"
          title={`${params.row.category ? params.row.category : "-"} ${
            params.row.group ? "/" + params.row.group : "-"
          }`}
          arrow
        >
          <p className="category">{`${
            params.row.category ? params.row.category : "-"
          } ${params.row.group ? "/" + params.row.group : "-"}`}</p>
        </Tooltip>
      ),
    },
    {
      field: "label",
      headerName: "",
      width: 70,
      hideSortIcons: true,
      sortable: false,
      renderCell: (params) => {
        const isHidden = params.row.hidden;
        const currentItems = [
          { name: "Редактировать", onClick: () => edit(params.row) },
          {
            name: isHidden ? "Вернуть на сайт" : "Скрыть с сайта",
            onClick: () =>
              hidden({ ...params.row, hidden: isHidden ? false : true }),
          },
          { name: "Удалить", onClick: () => remove(params.row.id) },
        ];
        return <ButtonWithMenu items={currentItems} />;
      },
    },
  ];
};
