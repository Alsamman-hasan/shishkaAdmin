import { Modal } from "@mui/material";
import { useAppDispatch } from "hooks/redux";
import { FC, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOutAction } from "redux/profile/actions";
import { BurgerSVG, CloseSVG, LogOutSVG } from "shared/model/static/assets/svg";
import { AuthorizedRoutes } from "shared/model/utils/const/route";
import IconButton from "shared/ui/Buttons/IconButton/IconButton";
import "./header.scss";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const logOut = useCallback(() => {
    dispatch(logOutAction());
  }, [dispatch]);

  const sidebarList = useMemo(
    () => [
      { title: "Мой склад", link: AuthorizedRoutes.MY_STORAGE_ROUTE },
      { title: "Мой сайт", link: AuthorizedRoutes.MY_STORAGE_IN_SITE_ROUTE },
    ],
    []
  );

  const handleLink = useCallback(
    (link: AuthorizedRoutes) => {
      navigate(link);
      closeModal();
    },
    [closeModal, navigate]
  );

  return (
    <div className="header">
      <IconButton picture={BurgerSVG} onClick={openModal} />
      <IconButton picture={LogOutSVG} onClick={logOut} text="Выйти" />
      <Modal open={open} className="sidebar" id="modal">
        <>
          <IconButton picture={CloseSVG} onClick={closeModal} fill="#223DCB" />
          <div className="sidebar__content">
            {sidebarList.map(({ title, link }) => (
              <div
                key={title}
                className="sidebar__content__item"
                onClick={() => handleLink(link)}
              >
                {title}
              </div>
            ))}
          </div>
        </>
      </Modal>
    </div>
  );
};
