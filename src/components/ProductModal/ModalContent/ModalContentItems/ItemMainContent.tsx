import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useAppSelector } from "hooks/redux";
import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { selectEmptyValue } from "../helpers";

interface IItemMainContentProps {
  selectedProduct: IProduct;
  changeState: (param: string, value: string | number | string[]) => void;
}

export const ItemMainContent: FC<IItemMainContentProps> = ({
  selectedProduct,
  changeState,
}) => {
  const { sellingPrice, description, category, groupId, label, discountPrice } =
    selectedProduct;

  const { allCategories, allGroups } = useAppSelector(
    (state) => state.product.categories
  );

  const allValuesLabel = useMemo(
    () => [
      { checked: label === "Бестселлер", value: "Бестселлер" },
      { checked: label === "Новинка", value: "Новинка" },
      { checked: label === "Акция", value: "Акция" },
    ],
    [label]
  );

  const [checked, setChecked] = useState(Boolean(discountPrice));

  const handleChangeDiscount = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked),
    []
  );
  const handleChangeLabel = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      changeState("label", event.target.value),
    [changeState]
  );
  const changeCategory = useCallback(
    (event: SelectChangeEvent<string | number>) =>
      changeState("category", event.target.value),
    [changeState]
  );
  const changeGroups = useCallback(
    (event: SelectChangeEvent<string | number>) =>
      changeState("groupId", event.target.value),
    [changeState]
  );
  const changeSellingPrice = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      changeState("sellingPrice", event.target.value),
    [changeState]
  );
  const changeDiscountPrice = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      changeState("discountPrice", event.target.value),
    [changeState]
  );
  const changeDescription = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      changeState("description", event.target.value),
    [changeState]
  );

  return (
    <div className="product-modal__container__content">
      <div className="product-modal__container__content__main">
        <div className="product-modal__container__content__main__left">
          <div className="product-modal__container__content__main__Left__category1">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Выбрать категорию
              </InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                label="Выбрать категорию"
                value={selectEmptyValue(category)}
                onChange={changeCategory}
              >
                {allCategories.map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="product-modal__container__content__main__Left__category2">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Выбрать подкатегорию
              </InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                label="Выбрать подкатегорию"
                value={selectEmptyValue(groupId)}
                onChange={changeGroups}
              >
                {allGroups.map(({ groupId, group }) => {
                  return (
                    <MenuItem key={groupId} value={groupId}>
                      {group}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="product-modal__container__content__main__right">
          <div className="product-modal__container__content__main__label">
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Добавить лейбл
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
                value={label}
                onChange={handleChangeLabel}
              >
                {allValuesLabel.map(({ checked, value }) => (
                  <FormControlLabel
                    checked={checked}
                    value={value}
                    control={<Radio />}
                    label={value}
                    key={value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="product-modal__container__content__main__price">
            <TextField
              id="outlined-basic3"
              label="Цена"
              variant="outlined"
              type="number"
              onChange={changeSellingPrice}
              value={selectEmptyValue(sellingPrice)}
              autoComplete="off"
            />
          </div>
          <div className="product-modal__container__content__main__sale">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeDiscount}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Скидка"
              />
            </FormGroup>
            <TextField
              id="outlined-basic3"
              label="Скидка"
              variant="outlined"
              type="number"
              disabled={!checked}
              onChange={changeDiscountPrice}
              value={selectEmptyValue(discountPrice)}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <div className="product-modal__container__content__description">
        <TextField
          multiline
          minRows={4}
          maxRows={13}
          id="UsersComment"
          label="Добавить описание"
          fullWidth
          variant="outlined"
          value={selectEmptyValue(description)}
          onChange={changeDescription}
        />
      </div>
    </div>
  );
};
