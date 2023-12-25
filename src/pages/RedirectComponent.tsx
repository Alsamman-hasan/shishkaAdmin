import { useAppSelector } from "hooks/redux";
import { FC, useMemo } from "react";
import { Navigate } from "react-router-dom";
import {
  AuthorizedRoutes,
  NoAuthorizedRoutes,
} from "shared/model/utils/const/route";

const RedirectComponent: FC = () => {
  const { isAuth } = useAppSelector((state) => state.profile);

  const currentRoute = useMemo(
    () =>
      isAuth
        ? AuthorizedRoutes.MY_STORAGE_ROUTE
        : NoAuthorizedRoutes.WELCOME_ROUTE,
    [isAuth]
  );

  return <Navigate to={currentRoute} />;
};

export default RedirectComponent;
