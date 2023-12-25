import { FC } from "react";
import "./searchInput.scss";
import { ISearchInputProps } from "./types";
import useDebounceInput from "hooks/useDebounceInput";
import { TextField } from "@mui/material";

const SearchInputInFilters: FC<ISearchInputProps> = ({
  searchValue,
  setSearchValue,
  placeholder = "Search",
  onClick,
  onKeyPressEnter,
  fullWidth = false,
  style,
  positionIcon = "start",
}) => {
  const fullWidthInput = fullWidth ? "full-width-input" : "";
  // const currentAdornment =
  //   positionIcon === "start" ? "startAdornment" : "endAdornment";

  const valueProps = useDebounceInput({
    value: searchValue,
    setValue: setSearchValue,
  });

  // const resetValue = useCallback(() => setSearchValue(""), [setSearchValue]);

  return (
    <div
      className={
        searchValue.length
          ? `search-input-filled ${fullWidthInput}`
          : `search-input ${fullWidthInput}`
      }
    >
      <TextField
        style={style}
        name="search"
        placeholder={placeholder}
        fullWidth={fullWidth}
        onKeyPress={onKeyPressEnter}
        type="search"
        InputProps={{
          autoComplete: "off",
          // [currentAdornment]: (
          //   <InputAdornment
          //     position={positionIcon}
          //     style={{ cursor: "pointer" }}
          //   >
          //     <div onClick={searchValue !== "" ? resetValue : onClick}>
          //       {searchValue !== "" ? <CopySVG /> : <CopySVG />}
          //     </div>
          //   </InputAdornment>
          // ),
        }}
        {...valueProps}
      />
    </div>
  );
};

export default SearchInputInFilters;
