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


  function  onMouseEnter(e) {
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
    <div className=" ml-2 relative  linksRef  w-10 h-10 rounded-3xl relative flex  items-center justify-center   ">
      <Heart animationState={props.animationState}/>
        <div
            className={`${
                props.animationState === "true" ? "animate-sun1 " : "opacity-95"
            } links opacity-0  z-20  absolute    top-5 left-20  md:top-[10vmax] md:-left-[1vmax] `}
        >
            `
            <div
                tabIndex="1"
                onKeyPress={(e=>{if(e.key==="Enter"){ props.setShowModal(true)}})}
                onMouseLeave={(e) => onMouseLeave(e)}
                onMouseEnter={(e) => onMouseEnter(e)}
                onClick={() => props.setShowModal(true)}
                className=" modalClass  links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax] rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow "
            >
                <img
                    className="modalClass   object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax] hover:animate-hover   "
                    src="icons/knopka.png"
                    alt=""
                />
            </div>
            <div className=" text-green-50   opacity-40   lg:opacity-30 top-24 lg:top-[8.5vmax] 2xl:top-[7vmax]   link-text text-[1vmax]  pills-text  text-white absolute ">
               Контакти
            </div>
        </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun2 " : "opacity-95"
        } links opacity-0  z-20  absolute    right-0 top-28  md:top-[5vmax] md:right-[9vmax]    `}
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
          className="  links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]    rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow "
        >
          <img
            className="decoration-red-500 object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax] hover:animate-hover   "
            src="icons/doctor.png"
            alt=""
          />
        </div>
        <div className=" text-green-50   text-end w-20  xl:w-24 2xl:w-40  opacity-40   lg:opacity-30 top-24 md:top-[7vmax] xl:right-[6vmax]  md:right-[6vmax] 2xl:top-[5vmax]  link-text text-[1vmax]  pills-text  text-white absolute ">
   Про мене
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun3 " : "opacity-95 "
        } links opacity-0   pills z-20  absolute   right-24 top-10 md:right-[14vmax] md:-top-[1vmax] `}
      >
        <div
            tabIndex="3"
            onKeyPress={(e=>{if(e.key==="Enter"){chatEnter()}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => chatEnter()}
          className="links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]   rounded-full shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="hover:animate-hover object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]"
            src="icons/planwet.png"
            alt=""
          />
        </div>
        <div className=" text-green-50   opacity-40 lg:opacity-30 top-20 md:top-[2vmax] md:right-[7.5vmax]   link-text text-[1vmax] pills-text  text-white absolute ">
          Чат
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun4 " : "opacity-95 "
        } links opacity-0  absolute z-20  right-24 bottom-10 md:right-[14vmax] md:bottom-[8vmax] `}
      >
        <div
            tabIndex="4"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(CALC_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(CALC_ROUTE)}
          className="links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]    rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]"
            src="icons/monitor.png"
            alt=""
          />
        </div>
        <div className=" text-green-50   opacity-40 lg:opacity-30 bottom-20 md:right-[3vmax] md:bottom-[5.5vmax]  link-text text-[1vmax]  pills-text  text-white absolute ">
       Розрахувати IMT
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun5 " : "opacity-95 "
        } links opacity-0 z-20  absolute  bottom-32 right-0 md:bottom-[13vmax] md:right-[7vmax]`}
      >
        <div
            tabIndex="5"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(DOSYAGNENYA_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(DOSYAGNENYA_ROUTE)}
          className="links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]    rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]"
            src="icons/chemodan.png"
            alt=""
          />
        </div>
        <div className=" text-green-50 opacity-40 lg:opacity-30 bottom-20 md:bottom-[7.5vmax] 2xl:bottom-[6vmax]  link-text text-[1vmax]   pills-text  text-white absolute  ">
          Досягнення
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun6 " : "opacity-95"
        } links opacity-0 z-30  absolute   left-20 bottom-10 md:-left-[1vmax] md:bottom-[12vmax] xl:bottom-[10vmax]  `}
      >
        <div
            tabIndex="6"
            onKeyPress={(e=>{if(e.key==="Enter"){  navigate(FORM_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(FORM_ROUTE)}
          className="links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]     rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]"
            src="icons/serdce.png"
            alt=""
          />
        </div>
        <div className=" text-green-50  md:w-32 lg:w-52 opacity-40 lg:opacity-30 bottom-20 md:bottom-[7.5vmax] 2xl:bottom-[6vmax] link-text text-[1vmax]   pills-text  text-white absolute  ">
          Записатися на прийом
        </div>
      </div>
    </div>
  );
}
export default Sun;
