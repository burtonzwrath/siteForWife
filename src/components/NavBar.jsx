import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  DOSYAGNENYA_ROUTE,
} from "../constants/consts";
import Clock from "./Clock";

function NavBar({ nav, setNav }) {
  return (
    <div       onKeyPress={(e=>{if(e.key==="Enter"){ setNav(!nav)}})} tabIndex="7"  className=" hidden sm:block flex flex-row h-screen pl-3 bg-green-50  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]  ">
      <div>
        <div
          className={
            nav === true
              ? "opacity-100 ease-in duration-500 absolute top-4 "
              : "opacity-0 ease-in duration-500  absolute top-4  "
          }
        ></div>
      </div>
      <div className="flex gap-2 ">
        <div
          className={
            nav === true
              ? "opacity-100 ease-in duration-500 nav pl-3  gap-7  flex-col flex  w-32 h-screen  items-center self-center justify-items-stretch   "
              : "opacity-0 ease-in duration-500  nav pl-3  gap-7  flex-col flex  w-32 h-screen items-center self-center justify-items-stretch   "
          }
        >
          <div className="justify-self-start">
            <Clock />
          </div>

          <div className="  navButtons  items-center flex justify-center text-teal-900 border-white h-14 w-32 text-center rounded-lg shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor ">
            <Link to={ABOUT_ROUTE}> Обо мне</Link>
          </div>
          <div className="navButtons  items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor">
            <Link to={FORM_ROUTE}> Записаться на прием </Link>
          </div>
          <div className="navButtons   items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg   shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor">
            <Link to={MAIN_ROUTE}> на главную</Link>
          </div>
          <div className="navButtons items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor">
            <Link to={CALC_ROUTE}> калькулятор</Link>
          </div>
          <div className="navButtons items-center flex justify-center text-teal-900 h-14   border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor">
            <Link to={DOSYAGNENYA_ROUTE}> достижения</Link>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className=" self-center h-screen w-7 flex items-center justify-center "
        >
          <div className="pl-2  text-xl text-sky-700">
            {" "}
            {nav === false ? ">" : "<"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
