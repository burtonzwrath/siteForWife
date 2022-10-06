import { useNavigate } from "react-router";
import { auth } from "./firebase";
import {
  CALC_ROUTE,
  ABOUT_ROUTE,
    ACHIEVEMENT_ROUTE,
    FORM_ROUTE,
    CONTACTS_ROUTE
} from "../constants/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import Heart from "./Heart";
import {useTranslation} from "react-i18next";


function Sun(props) {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
    const { t} = useTranslation();

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
    e.target.closest(".links-icon").nextSibling.style.opacity = "0.5";
    e.target.closest(".links-icon").style.transform = "scale(1)";
    e.target.closest(".links-icon").style.transition = "transform 0.1s linear";
  }

  return (
    <div className=" ml-2 mt-4 relative  linksRef  w-10 h-10 rounded-3xl relative flex  items-center justify-center   ">
      <Heart animationState={props.animationState}/>
        <div
            className={`${
                props.animationState === "true" ? "animate-sun1 " : "opacity-95"
            } links opacity-0  z-20  absolute    top-10 left-20  md:top-[10vmax] md:-left-[1vmax] `}
        >

            <div
                tabIndex="1"
                onKeyPress={(e=>{if(e.key==="Enter"){  navigate(CONTACTS_ROUTE)}})}
                onClick={() =>   navigate(CONTACTS_ROUTE)}
                onMouseLeave={(e) => onMouseLeave(e)}
                onMouseEnter={(e) => onMouseEnter(e)}
                className=" modalClass  links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax] rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow "
            >
                <img
                    className="modalClass   object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax] hover:animate-hover   "
                    src="icons/knopka.png"
                    alt=""
                />
            </div>
            <div className=" text-green-50   opacity-40 left-4 md:left-2 xl:-left-0  lg:opacity-50 top-20 md:top-[7.5vmax] 2xl:top-[6.5vmax]  xl:left-3   2xl:left-0 link-text text-[2.2vmax] md:text-[1.3vmax]  pills-text  text-white absolute ">
                {t("navBar.contacts")}
            </div>
        </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun2 " : "opacity-95"
        } links opacity-0  z-20  absolute    right-0 top-28  md:top-[6vmax] md:right-[8vmax]    `}
      >

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
        <div className=" text-green-50  w-12  top-20 left-[15%] md:-left-[5vmax] md:text-end md:w-20  xl:w-24 2xl:w-48  lg:opacity-50   lg:opacity-30  md:top-[7.5vmax]   xl:right-[6vmax] 2xl:text-center md:right-[6vmax] 2xl:right-[4vmax]  2xl:top-[6vmax]  link-text text-[2.2vmax] md:text-[1.3vmax] pills-text  text-white absolute ">
            {t("navBar.about")}
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun3 " : "opacity-95 "
        } links opacity-0   pills z-20  absolute   right-24 top-10 md:right-[14vmax] md:-top-[1.5vmax] `}
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
        <div className=" text-green-50 left-4  md:-left-[5vmax] opacity-40 lg:opacity-50 top-20 md:top-[2vmax]    link-text text-[2.2vmax] md:text-[1.3vmax]  pills-text  text-white absolute ">
            {t("navBar.chat")}
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
        <div className=" text-green-50   opacity-40 lg:opacity-50 bottom-20 md:right-[3vmax] md:bottom-[5.5vmax]  link-text text-[2.2vmax] md:text-[1.3vmax]  pills-text  text-white absolute ">
            {t("navBar.calculator")}
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun5 " : "opacity-95 "
        } links opacity-0 z-20  absolute  bottom-32 right-0 md:bottom-[13vmax] md:right-[7vmax]`}
      >
        <div
            tabIndex="5"
            onKeyPress={(e=>{if(e.key==="Enter"){ navigate(ACHIEVEMENT_ROUTE)}})}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(ACHIEVEMENT_ROUTE)}
          className="links-icon w-14 h-14 lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]    rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover object-fill lg:w-[6vmax] lg:h-[6vmax] 2xl:w-[4.5vmax] 2xl:h-[4.5vmax]"
            src="icons/chemodan.png"
            alt=""
          />
        </div>
        <div className=" text-green-50 opacity-40  -left-[14px] lg:opacity-50 bottom-20 md:bottom-[7.5vmax] 2xl:bottom-[6vmax]  link-text text-[2.2vmax] md:text-[1.3vmax]   pills-text  text-white absolute  ">
            {t("navBar.achievement")}
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
        <div className=" text-green-50  md:w-32 lg:w-52 opacity-50 lg:opacity-60 left-1 bottom-20 md:bottom-[7.5vmax] 2xl:bottom-[6vmax] link-text text-[2.2vmax] md:text-[1.3vmax]    pills-text  text-white absolute  ">
            {t("navBar.book")}
        </div>
      </div>
    </div>
  );
}
export default Sun;
