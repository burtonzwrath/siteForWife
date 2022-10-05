
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
  console.log (props.animationState)

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
      menu.style.display="flex"
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
          <div role="button" onClick={(e) => showMenu(e)}  className={`${
              props.animationState === "true" ? "animate-menuShow" : "opacity-60 z-10"
          } burgerMenu flex justify-center items-center absolute lg:hidden w-14 h-7 bg-green-100 top-5 left-52 rounded-bl-3xl rounded-tl-3xl  rounded-br-3xl rounded-tr-3xl   -z-10  font-['Italianno','cursive']  opacity-0`} ><span className="h-5  ">{t("menu.1")}</span>< /div>
    <div
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.setNav(!props.nav);
        }
      }}
      tabIndex="7"
      className=" z-50   sm:block flex flex-row h-screen pl-3 2xl:pl-[1.7vmax] bg-neutral-200  shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]  "
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
      <div className="flex gap-[1.5vmax]">
        <div
          className={
            props.nav === true
              ? "opacity-100 ease-in duration-500 nav pl-3 gap-7 md:gap-5 xl:gap-7  grid grid-cols-1 h-screen w-40 lg:w-32 2xl:w-[8vmax]   items-center self-start    "
              : "opacity-0 ease-in duration-500  nav pl-3 gap-7 md:gap-5 xl:gap-7 grid grid-cols-1 h-screen  w-40 lg:w-32 2xl:w-[8vmax] items-center  self-start     "
          }
        >
          <div className="self-start">
            <Clock />
          </div>

          <div className="h-[60vmax] sm:h-[60vmin]  self-start grid">
          <div
              id="/about"
              data-name={ABOUT_ROUTE}
            tabIndex="7"
              role="button"
            onKeyPress={(e) => onKeyPressEnter(e)}
            onClick={(e) =>{ switchRoutes(e)}}
            className=" navButtons  items-center flex bg-white justify-center border-2 border-green-100 text-teal-900 w-32  rounded-tl-2xl  rounded-br-2xl h-12 xl:h-14 2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax] text-center   hover:animate-hoverColor shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  "
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
            className="navButtons  items-center flex justify-center text-teal-900  h-12 xl:h-14  text-center w-32 rounded-tl-2xl  rounded-br-2xl 2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax]   hover:animate-hoverColor border-2   border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2 "
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
            className="navButtons   items-center flex justify-center text-teal-900  h-12 xl:h-14  text-center w-32 rounded-tl-2xl  rounded-br-2xl  2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax] hover:animate-hoverColor border-2   border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2 "
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
            className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14   text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2 2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax] border-green-100 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
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
            className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14    text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2 xl:text-[1vmax] 2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax]  border-green-100  bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
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
              className="navButtons items-center flex justify-center text-teal-900  h-12 xl:h-14    text-center w-32 rounded-tl-2xl  rounded-br-2xl  border-2 2xl:text-[1vmax] 2xl:w-[8.5vmax] 2xl:h-[3vmax]  border-green-100  bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.6)] hover:border-2  hover:animate-hoverColor"
          >
            {t("navBar.contacts")}
          </div>
          </div>


        </div>

        <div
          onClick={() => props.setNav(!props.nav)}
          className="  hidden lg:block  lg:ml-0 2xl:ml-1   lg:self-center lg:h-screen w-8 2xl:w-[2.3vmax]  lg:flex lg:items-center lg:justify-center   "
        >
          <div className=" overflow-hidden w-6  2xl:w-[1.5vmax] 2xl:h-[1.5vmax] rounded-full border-2 border-green-100 hover:border-2 hover:border-white hover:scale-125 duration-200 ">
            {props.nav === false ? <img className=" rotate-180  2xl:w-[1.5vmax] object-fill object-cover overflow-hidden    rounded-full"  src="../img/ar.png" alt=""/> :  <img className="  object-cover     2xl:w-[1.5vmax]   rounded-full" src="../img/ar.png" alt=""/>}
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
export default NavBar;
