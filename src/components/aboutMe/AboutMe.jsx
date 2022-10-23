import NavBar from "../navbar/NavBar";
import { useTranslation } from "react-i18next";
import LengSwitcher from "../mainPage/LengSwitcher";

function AboutMe({ nav, setNav, animationState }) {
  const { t } = useTranslation();

  return (
    <div className="aboutMe_wrapper">
      <div className={nav === true ? "navBar_Show  " : "navBar_Hide  "}>
        <NavBar nav={nav} setNav={setNav} />
      </div>
      <div className=" lengSwitcher_wrapper  ">
        <LengSwitcher animationState={animationState} />
      </div>
      <div className=" aboutMeContent_wrapper">
        <div className="aboutMe_h1">
          <h1 className="text-center"> {t("aboutMe.intro")} </h1>
        </div>
        <div className="aboutMeText_wrapper">
          <div className="grow ">
            <div className="max-w-xl 2xl:text-[1.5vmax]">
              <p className="first-letter:ml-3">{t("aboutMe.name")}</p>
              <br />
              <div className="min-w-fit">
                <p className=" text-[1vmax] first-letter:ml-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos minima, quos! Aliquam aut blanditiis culpa dolores
                  eligendi expedita, illum molestiae numquam provident quod.
                  Culpa dolorem doloribus eos, provident quas vitae?
                </p>
              </div>
            </div>
          </div>

          <div className=" aboutMeImage_wrapper ">
            <img className="aboutMe_image " src="img/about2.jpg" alt="" />
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
