import { FC } from "react";
import { Button } from "@mui/material";

interface IItemButtonsProps {
  handleModalClose: () => void;
  typeProduct: TProduct;
  onSaveProduct: () => void;
}

const ItemButtons: FC<IItemButtonsProps> = ({
  handleModalClose,
  typeProduct,
  onSaveProduct,
}) => (
  <div className="product-modal__container__btns">
    <Button variant="outlined" fullWidth onClick={handleModalClose}>
      Отмена
    </Button>
    <Button
      fullWidth
      variant="contained"
      onClick={onSaveProduct}
    >
      {typeProduct ? "Добавить" : "Редатировать"}
    </Button>
  </div>
);

export default ItemButtons;
