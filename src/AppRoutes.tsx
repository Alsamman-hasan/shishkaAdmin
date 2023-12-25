import { useAppSelector } from "hooks/redux";
import { createElement, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, NoAuthRoutes } from "shared/model/utils/routes";

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.profile);

  const currentRoutes = useMemo(
    () => (isAuth ? authRoutes : NoAuthRoutes),
    [isAuth]
  );

  return (
    <Routes>
      {currentRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={createElement(route.element)}
        >
          {route.children && (
            <Route
              path={route.children}
              element={createElement(route.element)}
            />
          )}
        </Route>
      ))}
    </Routes>
  );
};
export default AppRouter;
