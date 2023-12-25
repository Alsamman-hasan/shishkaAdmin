export const selectEmptyValue = (value: string | number | null | undefined) =>
  value ? value : "";

export const initialProduct = (): IProduct => ({
  barCode: "",
  category: "",
  code: "",
  created: "",
  description: "",
  externalCode: "",
  group: "",
  groupId: "",
  hidden: null,
  id: "",
  label: "Бестселлер",
  minPrice: 0,
  name: "",
  qty: 0,
  sellingPrice: 0,
  updated: "",
});

export const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];
