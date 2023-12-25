import { FC, useMemo } from "react";
import "./productModal.scss";
import { Modal } from "@mui/material";
import { IProductModalProps } from "./types";
import ModalContent from "./ModalContent/ModalContent";

const ProductModal: FC<IProductModalProps> = ({
  open,
  handleModalClose,
  typeProduct,
  selectedProduct,
  setSelectedProduct,
}) => {
  const currentSelectProduct = useMemo(() => {
    let tempObject = { ...selectedProduct };
    delete tempObject.images;
    return tempObject;
  }, [selectedProduct]);
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      className="product-modal"
      style={{ outline: "none" }}
    >
      <>
        <ModalContent
          open={open}
          handleModalClose={handleModalClose}
          typeProduct={typeProduct}
          selectedProduct={currentSelectProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </>
    </Modal>
  );
};

export default ProductModal;
