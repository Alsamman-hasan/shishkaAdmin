import { CSSProperties, Dispatch, SetStateAction, KeyboardEvent } from "react";

export interface ISearchInputProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  disabled?: boolean;
  onClick?: () => void;
  onKeyPressEnter?: (e: KeyboardEvent<HTMLDivElement>) => void;
  fullWidth?: boolean;
  style?: CSSProperties;
  positionIcon?: "end" | "start";
  handleSearch?: () => void;
  typeSearch?: "nft-verify";
}
