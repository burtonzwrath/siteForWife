import {
  ABOUT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  CALC_ROUTE,
  ACHIEVEMENT_ROUTE,
  CONTACTS_ROUTE,
} from "../constants/consts";
import { useLocation } from "react-router";
import Clock from "./Clock";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

function NavBar(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(props.animationState);

  function showMenu() {
    props.setNav(!props.nav);
    const menu = document.querySelector(".burgerMenu");
    const cross = document.querySelector(".cross");
    menu.style.display = "none";
    menu.style.transition = "0s";
    cross.style.opacity = "1";
  }
  function hideMenu() {
    props.setNav(!props.nav);
    const menu = document.querySelector(".burgerMenu");
    const cross = document.querySelector(".cross");
    setTimeout(() => {
      menu.style.display = "flex";
    }, 800);
    cross.style.opacity = "0";
    menu.style.transition = "0s";
  }

  function onKeyPressEnter(e) {
    if (e.key === "Enter") {
      navigate(e.dataName);
    }
  }

  function switchRoutes(e) {
    if (location.pathname === e.target.dataName) {
    } else {
      if (window.screen.width > 640) {
        navigate(e.target.id);
      } else {
        navigate(e.target.id);
        hideMenu();
      }
    }
  }

  return (
    <div className="navBar_wrapper">
      <div
        role="button"
        onClick={(e) => showMenu(e)}
        className={`${
          props.animationState === "true"
            ? "animate-menuShow"
            : "opacity-60 z-10"
        }  burgerMenu navBar_menuButton`}
      >
        <span className="h-5  ">{t("menu.1")}</span>
      </div>
      <div
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.setNav(!props.nav);
          }
        }}
        tabIndex="7"
        className=" navBar_contentBox  "
      >
        <div
          role="button"
          onClick={(e) => hideMenu(e)}
          className="  cross navBar_crossDiv"
        >
          <img
            className=" navBar_crossImage "
            src="../img/crossPng2.png"
            alt=""
          />
        </div>
        <div></div>
        <div className="navBarContent_wrapper">
          <div
            className={
              props.nav === true
                ? "opacity-100 navBar_contentDiv "
                : "opacity-0 navBar_contentDiv  "
            }
          >
            <div className="self-start">
              <Clock />
            </div>

            <div className="navBar_itemsWrapper">
              <div
                id="/about"
                data-name={ABOUT_ROUTE}
                tabIndex="7"
                role="button"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => {
                  switchRoutes(e);
                }}
                className="  navBar_button "
              >
                {t("navBar.about")}
              </div>
              <div
                id="/form"
                data-name={FORM_ROUTE}
                role="button"
                tabIndex="8"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => switchRoutes(e)}
                className="navBar_button"
              >
                {t("navBar.book")}
              </div>
              <div
                id="/"
                data-name={MAIN_ROUTE}
                tabIndex="9"
                role="button"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => switchRoutes(e)}
                className="navBar_button "
              >
                {t("navBar.mainPage")}
              </div>
              <div
                id="/calc"
                data-name={CALC_ROUTE}
                tabIndex="10"
                role="button"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => switchRoutes(e)}
                className="navBar_button"
              >
                {t("navBar.calculator")}
              </div>
              <div
                id="/achievement"
                data-name={ACHIEVEMENT_ROUTE}
                tabIndex="11"
                role="button"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => switchRoutes(e)}
                className="navBar_button"
              >
                {t("navBar.achievement")}
              </div>
              <div
                id="/contacts"
                data-name={CONTACTS_ROUTE}
                tabIndex="12"
                role="button"
                onKeyPress={(e) => onKeyPressEnter(e)}
                onClick={(e) => switchRoutes(e)}
                className="navBar_button"
              >
                {t("navBar.contacts")}
              </div>
            </div>
          </div>

          <div
            onClick={() => props.setNav(!props.nav)}
            className="  navBar_hiddenDiv  "
          >
            <div className=" navBar_arrowDiv">
              {props.nav === false ? (
                <img
                  className=" rotate-180  navBar_arrow"
                  src="../img/ar.png"
                  alt=""
                />
              ) : (
                <img className=" navBar_arrow" src="../img/ar.png" alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
