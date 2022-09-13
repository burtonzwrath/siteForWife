import { Route, Routes } from "react-router-dom";
import { navRoutes } from "../routes";

const AppRouter = () => {

  return (
    <Routes>
      {navRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component()} exact={true} />
      ))}
    </Routes>
  );
};

export default AppRouter;
