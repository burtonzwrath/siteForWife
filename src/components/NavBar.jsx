import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CHAT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  HEART_ROUTE,
  CLOCK_ROUTE,
  CONTACTS_ROUTE,
} from "../constants/consts";
import Clock from "./Clock";



function NavBar({nav,setNav}) {
  return (
 <div    className="flex flex-row h-screen     shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]  ">

      <div className=" nav   gap-7  flex-col flex  w-28  h-screen items-center justify-between ">
          <div className={nav===true?"opacity-100 ease-in duration-500 ":"opacity-0 ease-in duration-500 "}>
          <Clock/>
          </div>
        <Link to={ABOUT_ROUTE}> about</Link>
        <Link to={FORM_ROUTE}> form</Link>
        <Link to={MAIN_ROUTE}> main</Link>
        <Link to={CHAT_ROUTE}> chat</Link>
        <Link to={CALC_ROUTE}> calculator</Link>
        <Link to={HEART_ROUTE}> Heart</Link>
        <Link to={CLOCK_ROUTE}>Clock</Link>
        <Link to={CONTACTS_ROUTE}>Contacts</Link>
      </div>
     <div onClick={() => setNav(!nav)}
         className=" self-center h-screen w-7 flex items-center justify-center "
     >
         <div className=""> {nav === false ? ">" : "<"}</div>

     </div>

 </div>
  );
}
export default NavBar;
