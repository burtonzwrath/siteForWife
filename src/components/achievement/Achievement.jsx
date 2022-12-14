import Carousel from "../carousel/Carousel";
import NavBar from "../navbar/NavBar";
import image from "../../img/dost2.jpg";
import { useTranslation } from "react-i18next";
import LengSwitcher from "../mainPage/LengSwitcher";

function Achievement({ nav, setNav, animationState }) {
  const { t } = useTranslation();

  return (
    <div className="achievement_wrapper  ">
      <img className="achievement_mainImage" src={image} alt="" />
      <div className={nav === true ? "navBar_Show  " : "navBar_Hide "}>
        <NavBar nav={nav} setNav={setNav} />
      </div>
      <div className=" lengSwitcher_wrapper">
        <LengSwitcher animationState={animationState} />
      </div>
      <div className=" achievement_contentWrapper">
        <div className="achievement_textWrapper">
          <h1 className="achievement_h1">{t("achievement.text")}</h1>
        </div>
        <div className="achievementCarousel_wrapper ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
