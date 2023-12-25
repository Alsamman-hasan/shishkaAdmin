import { FC, memo, useState } from "react";
import "./buttonWithMenu.scss";
import { ButtonWithMenuPT } from "./types";
import IconButton from "shared/ui/Buttons/IconButton/IconButton";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { ThreeDotSVG } from "shared/model/static/assets/svg";

const ButtonWithMenuUI: FC<ButtonWithMenuPT> = ({ items, style }) => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const closeMenu = (onClick: () => void) => {
    onClick();
    setAnchorEl(null);
  };

  return (
    <div className="button-with-menu">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          setAnchorEl(e.currentTarget);
        }}
        picture={ThreeDotSVG}
      />
      <Menu
        id={"menu-menu-container"}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        style={style}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {items &&
          items.map(
            ({ name, onClick, Icon, loading, border, colorText }, index) => {
              return !border ? (
                <MenuItem
                  key={`${name} + ${index}`}
                  onClick={() => closeMenu(onClick)}
                >
                  {loading && <CircularProgress size={16} />}
                  {Icon && <Icon />}
                  <div
                    className="button-with-menu__text"
                    style={{ color: colorText }}
                  >
                    {name}
                  </div>
                </MenuItem>
              ) : (
                <div
                  key={`${name} + ${index}`}
                  className="button-with-menu__border"
                />
              );
            }
          )}
      </Menu>
    </div>
  );
};
const ButtonWithMenu = memo(ButtonWithMenuUI);
export default ButtonWithMenu;
