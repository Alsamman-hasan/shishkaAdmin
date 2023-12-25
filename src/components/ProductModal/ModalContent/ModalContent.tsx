import { FC, useCallback, useMemo, useState } from "react";
import { CloseSVG } from "shared/model/static/assets/svg";
import { IProductModalProps } from "../types";
import { ItemMainContent } from "./ModalContentItems/ItemMainContent";
import IconButton from "shared/ui/Buttons/IconButton/IconButton";
import ItemButtons from "./ModalContentItems/ItemsButtons";
import { AddImages } from "./ModalContentItems/AddImages";
import { useAppDispatch } from "hooks/redux";
import {
  addImagesForProductAction,
  addProductAction,
  updateProductAction,
} from "redux/products/actions";

const ModalContent: FC<IProductModalProps> = ({
  handleModalClose,
  typeProduct,
  selectedProduct,
  setSelectedProduct,
}) => {
  const dispatch = useAppDispatch();
  const edit = useMemo(() => typeProduct === "site", [typeProduct]);

  const initialFiles: IImage[] = useMemo(
    () =>
      selectedProduct.images?.length
        ? selectedProduct.images
        : [{ url: "", orientation: "vertical" }],
    [selectedProduct.images]
  );

  const [files, setFile] = useState<IImage[]>(initialFiles);
  const [previewUrl, setPreviewUrl] = useState<IImage[]>(initialFiles);

  const changeState = useCallback(
    (param: string, value: string | number | string[]) =>
      setSelectedProduct((prev: IProduct) => ({ ...prev, [param]: value })),
    [setSelectedProduct]
  );

  const onSaveProduct = useCallback(() => {
    const currentPreviewUrl = previewUrl.filter((item) => item.url !== "");

    if (currentPreviewUrl.length > 0) {
      const data = new FormData();
      data.append("method", "addImages");
      data.append("productId", selectedProduct.id);
      currentPreviewUrl.forEach(({ url, orientation }, index) => {
        data.append(`image${index}`, url);
        data.append(`orientation${index}`, orientation);
      });

      dispatch(addImagesForProductAction(data));
    }

    handleModalClose();

    edit
      ? dispatch(updateProductAction(selectedProduct))
      : dispatch(addProductAction(selectedProduct));
  }, [dispatch, edit, handleModalClose, previewUrl, selectedProduct]);

  return (
    <>
      <div className="product-modal__container">
        <div className="product-modal__container__header">
          <h2>{edit ? "Изменить товар на сайте" : "Добавить товар на сайт"}</h2>
          <IconButton
            picture={CloseSVG}
            onClick={handleModalClose}
            fill="#223DCB"
          />
        </div>
        <ItemMainContent
          selectedProduct={selectedProduct}
          changeState={changeState}
        />
        <AddImages
          files={files}
          setFile={setFile}
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
        />
        <ItemButtons
          handleModalClose={handleModalClose}
          typeProduct={typeProduct}
          onSaveProduct={onSaveProduct}
        />
      </div>
    </>
  );
};

export default ModalContent;
