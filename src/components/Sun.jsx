import { useNavigate } from "react-router";
import { auth } from "./firebase";
import {
  CALC_ROUTE,
  ABOUT_ROUTE,
  ACHIEVEMENT_ROUTE,
  FORM_ROUTE,
  CONTACTS_ROUTE,
} from "../constants/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import Heart from "./Heart";
import { useTranslation } from "react-i18next";

function Sun(props) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { t } = useTranslation();

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
    e.target.closest(".links-icon").nextSibling.style.opacity = "0.5";
    e.target.closest(".links-icon").style.transform = "scale(1)";
    e.target.closest(".links-icon").style.transition = "transform 0.1s linear";
  }

  return (
    <div className=" sunContent_wrapper ">
      <Heart animationState={props.animationState} />
      <div
        className={`${
          props.animationState === "true" ? "animate-sun1 " : "opacity-95"
        } links contacts_animation`}
      >
        <div
          tabIndex="1"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(CONTACTS_ROUTE);
            }
          }}
          onClick={() => navigate(CONTACTS_ROUTE)}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          className="  links-icon sun_contacts  hover:animate-hoverShadow"
        >
          <img
            className="   sun_contactsImage hover:animate-hover  "
            src="icons/knopka.png"
            alt=""
          />
        </div>
        <div className=" sun_contactsText link-text ">
          {t("navBar.contacts")}
        </div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun2 " : "opacity-95"
        } links about_animation   `}
      >
        <div
          tabIndex="2"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(ABOUT_ROUTE);
            }
          }}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => {
            navigate(ABOUT_ROUTE);
          }}
          className=" links-icon sun_about  hover:animate-hoverShadow "
        >
          <img
            className=" sun_aboutImage  hover:animate-hover   "
            src="icons/doctor.png"
            alt=""
          />
        </div>
        <div className="  sun_aboutText  ">{t("navBar.about")}</div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun3 " : "opacity-95 "
        } links chat_animation  `}
      >
        <div
          tabIndex="3"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              chatEnter();
            }
          }}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => chatEnter()}
          className="links-icon sun_chat hover:animate-hoverShadow"
        >
          <img
            className="hover:animate-hover sun_chatImage "
            src="icons/planwet.png"
            alt=""
          />
        </div>
        <div className=" sun_chatText ">{t("navBar.chat")}</div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun4 " : "opacity-95 "
        } links calculator_animation `}
      >
        <div
          tabIndex="4"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(CALC_ROUTE);
            }
          }}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(CALC_ROUTE)}
          className="links-icon sun_calculator  hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover sun_calculatorImage "
            src="icons/monitor.png"
            alt=""
          />
        </div>
        <div className=" sun_calculatorText ">{t("navBar.calculator")}</div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun5 " : "opacity-95 "
        } links achievement_animation`}
      >
        <div
          tabIndex="5"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(ACHIEVEMENT_ROUTE);
            }
          }}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(ACHIEVEMENT_ROUTE)}
          className="links-icon  sun_achievement hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover sun_achievementImage "
            src="icons/chemodan.png"
            alt=""
          />
        </div>
        <div className=" sun_achievementText  ">{t("navBar.achievement")}</div>
      </div>

      <div
        className={`${
          props.animationState === "true" ? "animate-sun6 " : "opacity-95"
        } links  book_animation  `}
      >
        <div
          tabIndex="6"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(FORM_ROUTE);
            }
          }}
          onMouseLeave={(e) => onMouseLeave(e)}
          onMouseEnter={(e) => onMouseEnter(e)}
          onClick={() => navigate(FORM_ROUTE)}
          className="links-icon sun_book  hover:animate-hoverShadow"
        >
          <img
            className=" hover:animate-hover sun_bookImage "
            src="icons/serdce.png"
            alt=""
          />
        </div>
        <div className="sun_bookText ">{t("navBar.book")}</div>
      </div>
    </div>
  );
}
export default Sun;
