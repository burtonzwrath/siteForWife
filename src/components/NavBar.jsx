import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CHAT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  HEART_ROUTE,
    CLOCK_ROUTE
} from "../constants/consts";

function NavBar() {
  return (
    <div className="sticky top-0 bg-white flex gap-5">
      <Link to={ABOUT_ROUTE}> about</Link>
      <Link to={FORM_ROUTE}> form</Link>
      <Link to={MAIN_ROUTE}> main</Link>
      <Link to={CHAT_ROUTE}> chat</Link>
      <Link to={CALC_ROUTE}> calculator</Link>
      <Link to={HEART_ROUTE}> Heart</Link>
        <Link to={CLOCK_ROUTE}>Clock</Link>
    </div>
  );
}
export default NavBar;
