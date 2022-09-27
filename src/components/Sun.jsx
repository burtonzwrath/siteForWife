import { useNavigate } from "react-router";
import { auth } from "./firebase";
import {
  CALC_ROUTE,
  ABOUT_ROUTE,
  DOSYAGNENYA_ROUTE,
    FORM_ROUTE
} from "../constants/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import Heart from "./Heart";


function Sun(props) {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  function chatEnter() {
    if (!user) {
      props.signWithGoogle();
      props.setShowChat(true);
    } else {
      props.setShowChat(true);
    }
  }


  function onMouseEnter(e) {
    e.target.closest(".links-icon").nextSibling.style.opacity = "100";
    e.target.closest(".links-icon").style.transform = "scale(1.1)";
    e.target.closest(".links-icon").style.transition = "transform 0.1s linear";
  }
  function onMouseLeave(e) {
    e.target.closest(".links-icon").nextSibling.style.opacity = "0.3";
    e.target.closest(".links-icon").style.transform = "scale(1)";
    e.target.closest(".links-icon").style.transition = "transform 0.1s linear";
  }

  return (
    <div className=" mt-3 ml-2 sm:right-20 linksRef   w-10 h-10 rounded-3xl relative flex  items-center justify-center   ">
      <Heart/>
      <div
        className={`  opacity-0   links  absolute z-20  flex items-center rotate-90 top-[10vmin] left-[20vmin] sm:top-[29vmin] sm:left-[12vmin]  ${
            props.animationState === "true" ? "animate-sun1 " : "opacity-95"
        } `}
      >
        <div tabIndex="1"
             onKeyPress={(e=>{if(e.key==="Enter"){ props.setShowModal(true)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => props.setShowModal(true)}
          className="modalClass links-icon w-14 h-14 md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]  rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" modalClass -rotate-90 hover:animate-hover bg-contain"
            src="icons/kapelnica.png"
            alt=""
          />
        </div>
        <div className=" opacity-40 lg:opacity-30 text-[1.2vmax] link-text   pills-text   text-white absolute -rotate-90  bottom-[9vmin] md:bottom-[0vmin] left-[12vmin] md:left-[9vmin] ">
        Контакти
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun2 " : "opacity-95"
        } links opacity-0  z-20  absolute flex items-center -rotate-45  top-[26vmin] right-[0vmin] sm:top-[17vmin] sm:right-[1vmin]  `}
      >
        `
        <div
            tabIndex="2"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(ABOUT_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => {
            navigate(ABOUT_ROUTE);
          }}
          className="  links-icon w-14 h-14  md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]  rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow "
        >
          <img
            className="decoration-red-500 object-fill rotate-45 hover:animate-hover   "
            src="icons/doc1.png"
            alt=""
          />
        </div>
        <div className=" opacity-40   lg:opacity-30  link-text text-[1.2vmax] bottom-[5vmin] right-[15vmin] md:right-[15vmin] pills-text  rotate-45 text-white absolute ">
   Про мене
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun3 " : "opacity-95 "
        } links opacity-0   pills z-20  absolute flex items-center rotate-180 top-[10vmin] right-[25vmin] sm:-top-[0vmin] sm:right-[14vmin]`}
      >
        <div
            tabIndex="3"
            onKeyPress={(e=>{if(e.key==="Enter"){chatEnter()}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => chatEnter()}
          className="links-icon w-14 h-14 md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]    rounded-full shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="hover:animate-hover bg-contain"
            src="icons/pelula.png"
            alt=""
          />
        </div>
        <div className=" opacity-40 lg:opacity-30 link-text text-[1.2vmax] -top-[6vmin]  left-[12vmin] md:-tp[0vmin] md-[15vmin]  pills-text rotate-180  text-white absolute ">
          Чат
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun4 " : "opacity-95 "
        } links opacity-0  absolute z-20  flex items-center rotate-45 bottom-[10vmin] right-[25vmin] sm:-top-[21vmin] sm:right-[12vmin]`}
      >
        <div
            tabIndex="4"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(CALC_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(CALC_ROUTE)}
          className="links-icon w-14 h-14 md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]    rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="-rotate-45 hover:animate-hover bg-contain"
            src="icons/monitor.png"
            alt=""
          />
        </div>
        <div className=" opacity-40 lg:opacity-30  link-text text-[1.2vmax]  right-[8vmin] -bottom-[5vmin]   pills-text -rotate-45 text-white absolute ">
       Розрахувати IMT
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun5 " : "opacity-95 "
        } links opacity-0 z-20  absolute flex items-center -rotate-90 bottom-[28vmin] right-[0vmin] sm:-top-[25vmin] sm:-right-[1vmin]`}
      >
        <div
            tabIndex="5"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(DOSYAGNENYA_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(DOSYAGNENYA_ROUTE)}
          className="links-icon w-14 h-14 md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]   rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="hover:animate-hover bg-contain rotate-90"
            src="icons/serdce.png"
            alt=""
          />
        </div>
        <div className=" opacity-40 lg:opacity-30  link-text text-[1.2vmax] left-[9vmin] md:left-[8vmin]  pills-text rotate-90  text-white absolute  ">
          Досягнення
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun6 " : "opacity-95"
        } links opacity-0 z-30  absolute flex items-center -rotate-90 bottom-[10vmin] left-[20vmin] sm:-top-[40vmin] sm:left-[14vmin] `}
      >
        <div
            tabIndex="6"
            onKeyPress={(e=>{if(e.key==="Enter"){  navigate(FORM_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(FORM_ROUTE)}
          className="links-icon w-14 h-14 md:w-[5.5vmax] md:h-[5.5vmax] xl:w-[4.5vmax] xl:h-[4.5vmax]    rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover rotate-90 bg-contain"
            src="icons/planwet.png"
            alt=""
          />
        </div>
        <div className=" opacity-40 lg:opacity-30 link-text rotate-90 text-[1.2vmax] left-[12vmin] md:left-[10vmin]  pills-text  text-white absolute  ">
          Записатися на прийом
        </div>
      </div>
    </div>
  );
}
export default Sun;
