import { createElement, FC, memo } from "react";
import "./iconButton.scss";
import { IIconButtonButtonProps } from "./types";

const IconButtonUI: FC<IIconButtonButtonProps> = ({
  onClick,
  picture,
  text,
  active = false,
  style,
  link,
  fill,
}) => {
  return (
    <div
      style={style}
      className={`icon-button ${active ? "active" : ""}`}
      onClick={onClick ? onClick : undefined}
    >
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="icon-button__picture">{createElement(picture)}</div>
        </a>
      ) : (
        <div className="icon-button__picture">
          {createElement(picture, { fill })}
        </div>
      )}
      <p className="icon-button__text">{text}</p>
    </div>
  );
};
const IconButton = memo(IconButtonUI);
export default IconButton;
