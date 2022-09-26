import { Route, Routes } from "react-router-dom";
import { navRoutes } from "../routes";

const AppRouter = ( props) => {

  return (
    <Routes>
      {navRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component(props)} exact={true} />
      ))}
    </Routes>
  );
};
export default AppRouter;
