
import {
  ABOUT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  DOSYAGNENYA_ROUTE,
} from "../constants/consts";
import {useLocation} from "react-router";
import Clock from "./Clock";
import { useNavigate } from "react-router";

function NavBar({ nav, setNav }) {
  const navigate = useNavigate();
  const location=useLocation()
  console.log(location.pathname)

  function showMenu (){
    setNav(!nav)
    const menu=document.querySelector('.burgerMenu')
    const cross=document.querySelector('.crosshair')
    menu.style.display="none"
    menu.style.transition="0s"
    cross.style.opacity="1"

  }
  function hideMenu(){
    setNav(!nav)
    const menu=document.querySelector('.burgerMenu')
    const cross=document.querySelector('.crosshair')
    setTimeout(()=>{
      menu.style.display="block"
    },500)
    cross.style.opacity="0"
    menu.style.transition="0s"

  }
  return (
      <div className="h-screen  ">
          <div role="button" onClick={(e) => showMenu(e)} className=" burgerMenu text-center absolute lg:hidden w-20 h-10 bg-green-50 top-1 left-52 rounded-bl-3xl rounded-tl-3xl  rounded-br-3xl rounded-tr-3xl   -z-10">menu</div>
    <div
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setNav(!nav);
        }
      }}
      tabIndex="7"
      className=" z-50   sm:block flex flex-row h-screen pl-3 bg-green-50  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]  "
    >
      <div onClick={(e)=>hideMenu(e)} className="crosshair lg:hidden w-5 h-5 absolute top-2 right-0">x</div>

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
              ? "opacity-100 ease-in duration-500 nav pl-3  gap-7  grid grid-cols-1 w-40 lg:w-32 h-[90vmin]  items-center self-start    "
              : "opacity-0 ease-in duration-500  nav pl-3  gap-7 grid grid-cols-1  w-40  lg:w-32 h-[90vmin] items-center  self-start     "
          }
        >
          <div className="">
            <Clock />
          </div>

          <div
            tabIndex="1"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(ABOUT_ROUTE);
              }
            }}
            role="button"
            onClick={() => {if(location.pathname==="/about"){}else{ navigate(ABOUT_ROUTE);hideMenu()}} }
            className=" navButtons  items-center flex justify-center text-teal-900 border-white h-14 w-32 text-center rounded-lg shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor "
          >
            Обо мне
          </div>
          <div
            tabIndex="2"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(FORM_ROUTE);
              }
            }}
            role="button"
            onClick={() => {if(location.pathname==="/form"){}else{ navigate(FORM_ROUTE);hideMenu()}} }
            className="navButtons  items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor"
          >
            Записаться на прием
          </div>
          <div
            tabIndex="3"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(MAIN_ROUTE);
              }
            }}
            role="button"
            onClick={() => {if(location.pathname==="/"){}else{ navigate(MAIN_ROUTE);hideMenu()}} }
            className="navButtons   items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg   shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor"
          >
            на главную
          </div>
          <div
            tabIndex="4"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(CALC_ROUTE);
              }
            }}
            role="button"
            onClick={() => {if(location.pathname==="/calc"){}else{ navigate(CALC_ROUTE);hideMenu()}} }
            className="navButtons items-center flex justify-center text-teal-900 h-14  border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor"
          >
            калькулятор
          </div>
          <div
            tabIndex="5"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                navigate(DOSYAGNENYA_ROUTE);
              }
            }}
            role="button"
            onClick={() => {if(location.pathname==="/dosyagnenya"){}else{ navigate(DOSYAGNENYA_ROUTE);hideMenu()}} }
            className="navButtons items-center flex justify-center text-teal-900 h-14   border-white text-center w-32 rounded-lg  shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverColor"
          >
            достижения
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className=" hidden lg:block lg:self-center lg:h-screen lg:w-7 lg:flex lg:items-center lg:justify-center "
        >
          <div className="pl-2  text-xl text-sky-700">
            {" "}
            {nav === false ? ">" : "<"}
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
export default NavBar;
