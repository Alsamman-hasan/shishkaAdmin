import { FC } from "react";
import { AuthorizedRoutes, NoAuthorizedRoutes } from "./const/route";
import Auth from "pages/auth/Auth";
import RedirectComponent from "pages/RedirectComponent";
import MyStoragePage from "pages/MyStoragePage/MyStoragePage";
import MySitePage from "pages/MySitePage/MySitePage";

interface IRoutes {
  path: string;
  element: FC;
  children?: string;
}
export const authRoutes: IRoutes[] = [
  { path: AuthorizedRoutes.UNKNOWN_ROUTE, element: RedirectComponent },
  { path: AuthorizedRoutes.MY_STORAGE_ROUTE, element: MyStoragePage },
  { path: AuthorizedRoutes.MY_STORAGE_IN_SITE_ROUTE, element: MySitePage },
];

export const NoAuthRoutes: IRoutes[] = [
  { path: NoAuthorizedRoutes.UNKNOWN_ROUTE, element: RedirectComponent },
  { path: NoAuthorizedRoutes.WELCOME_ROUTE, element: Auth },
];
