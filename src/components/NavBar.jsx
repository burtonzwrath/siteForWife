
import {
  ABOUT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  DOSYAGNENYA_ROUTE,
    CONTACTS_ROUTE
} from "../constants/consts";
import {useLocation} from "react-router";
import Clock from "./Clock";
import { useNavigate } from "react-router";
import {useTranslation} from "react-i18next";

function NavBar(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location=useLocation()
  console.log (props.showModal)

  function showMenu (){
    props.setNav(!props.nav)
    const menu=document.querySelector('.burgerMenu')
    const cross=document.querySelector('.cross')
    menu.style.display="none"
    menu.style.transition="0s"
    cross.style.opacity="1"

  }
  function hideMenu(){
    props.setNav(!props.nav)
    const menu=document.querySelector('.burgerMenu')
    const cross=document.querySelector('.cross')
    setTimeout(()=>{
      menu.style.display="block"
    },800)
    cross.style.opacity="0"
    menu.style.transition="0s"
  }

  function onKeyPressEnter(e){
    if (e.key === "Enter") {
      navigate(e.dataName);
    }
  }

  function switchRoutes (e){
    if(location.pathname===e.target.dataName){}else{ if(window.screen.width>640) {navigate(e.target.id)}else{navigate(e.target.id);hideMenu()}}
}

  return (
      <div className="h-screen  ">
          <div role="button" onClick={(e) => showMenu(e)} className=" burgerMenu text-center absolute lg:hidden w-20 h-10 bg-green-50 top-1 left-52 rounded-bl-3xl rounded-tl-3xl  rounded-br-3xl rounded-tr-3xl   -z-10">menu</div>
    <div
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.setNav(!props.nav);
        }
      }}
      tabIndex="7"
      className=" z-50   sm:block flex flex-row h-screen pl-3 bg-neutral-200  shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]  "
    >
      <div role="button" onClick={(e)=>hideMenu(e)} className=" flex  justify-center   text-sm cross  lg:hidden w-5 h-5 absolute top-1 right-0">
        <img className=" object-fill opacity-40 bg-white rounded-full w-4 h-4 " src="../img/crossPng2.png" alt=""/></div>
      <div>
        <div
          className={
            props.nav === true
              ? "opacity-100 ease-in duration-500 absolute top-4 "
              : "opacity-0 ease-in duration-500  absolute top-4  "
          }
        ></div>
      </div>
      <div className="flex gap-2 ">
        <div
          className={
            props.nav === true
              ? "opacity-100 ease-in duration-500 nav pl-3 gap-7 md:gap-5 xl:gap-7  grid grid-cols-1 w-40 lg:w-32 h-[90vmin]  items-center self-start    "
              : "opacity-0 ease-in duration-500  nav pl-3 gap-7 md:gap-5 xl:gap-7 grid grid-cols-1  w-40  lg:w-32 h-[90vmin] items-center  self-start     "
          }
        >
          <div className="">
            <Clock />
          </div>

          <div
              id="/about"
              data-name={ABOUT_ROUTE}
            tabIndex="7"
              role="button"
            onKeyPress={(e) => onKeyPressEnter(e)}
            onClick={(e) =>{ switchRoutes(e)}}
            className=" navButtons  items-center flex bg-white justify-center border-2 border-green-100 text-teal-900 rounded-tl-2xl  rounded-br-2xl h-12 xl:h-14 w-32 text-center   hover:animate-hoverColor shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  "
          >
            {t("navBar.about")}
          </div>
          <div
              id="/form"
              data-name={FORM_ROUTE}
              role="button"
            tabIndex="8"
              onKeyPress={(e) => onKeyPressEnter(e)}
            onClick={(e) =>switchRoutes(e)}
            className="navButtons  items-center flex justify-center text-teal-900  h-12 xl:h-14  text-center w-32 rounded-tl-2xl  rounded-br-2xl    hover:animate-hoverColor border-2   border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2 "
          >
            {t("navBar.book")}
          </div>
          <div
              id="/"
              data-name={MAIN_ROUTE}
            tabIndex="9"
              role="button"
              onKeyPress={(e) => onKeyPressEnter(e)}
              onClick={(e) =>switchRoutes(e)}
            className="navButtons   items-center flex justify-center text-teal-900  h-12 xl:h-14  text-center w-32 rounded-tl-2xl  rounded-br-2xl   hover:animate-hoverColor border-2   border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2 "
          >
            {t("navBar.mainPage")}
          </div>
          <div
              id="/calc"
              data-name={CALC_ROUTE}
            tabIndex="10"
              role="button"
              onKeyPress={(e) => onKeyPressEnter(e)}
              onClick={(e) =>switchRoutes(e)}
            className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14   text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2   border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
          >
            {t("navBar.calculator")}
          </div>
          <div
              id="/dosyagnenya"
              data-name={DOSYAGNENYA_ROUTE}
            tabIndex="11"
            role="button"
              onKeyPress={(e) => onKeyPressEnter(e)}
              onClick={(e) =>switchRoutes(e)}
            className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14    text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2   border-green-100  bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
          >
            {t("navBar.achievement")}
          </div>
          <div
              id="/contacts"
              data-name={CONTACTS_ROUTE}
              tabIndex="12"
              role="button"
              onKeyPress={(e) => onKeyPressEnter(e)}
              onClick={(e) =>switchRoutes(e)}
              className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14    text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2   border-green-100  bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
          >
            {t("navBar.contacts")}
          </div>


        </div>

        <div
          onClick={() => props.setNav(!props.nav)}
          className=" lg:ml-3 hidden lg:block lg:self-center lg:h-screen lg:w-9 lg:flex lg:items-center lg:justify-center   "
        >
          <div className="   w-6 h-6 rounded-full border-2 border-green-100 hover:border-2 hover:border-white hover:scale-125 duration-200 ">
            {props.nav === false ? <img className=" rotate-180 object-fill rounded-full"  src="../img/ar.png" alt=""/> :  <img className="  object-fill rounded-full" src="../img/ar.png" alt=""/>}
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
export default NavBar;
