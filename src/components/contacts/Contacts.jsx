import { useTranslation } from "react-i18next";
import NavBar from "../navbar/NavBar";
import img from "../../img/contacts.jpg";
import LengSwitcher from "../mainPage/LengSwitcher";

function Contacts({ nav, setNav, animationState }) {
  const { t } = useTranslation();

  return (
    <div id="contacts" className=" contacts_wrapper ">
      <div className={nav === true ? "navBar_Show " : "navBar_Hide   "}>
        <NavBar nav={nav} setNav={setNav} />
        <div className="w-full"></div>
      </div>
      <div className=" lengSwitcher_wrapper ">
        <LengSwitcher animationState={animationState} />
      </div>
      <div className="contactsContent_wrapper relative">
        <div className="contacts_h1">{t("contacts.h1")}</div>
        <div className="contactsMainContent_wrapper">
          <div>
            <img className="  contacts_image " src={img} alt="" />
          </div>
          <div className="contacts_info">
            <div className="contacts_div ">
              <img
                className="contacts_imageIcon"
                src="icons/viber2.png"
                alt=""
              />
              <span className="contacts_text">+380988842079</span>
            </div>
            <div className="contacts_div">
              <img
                className="contacts_imageIcon"
                src="icons/insta.png"
                alt=""
              />
              <span className="contacts_text">@dr_svetlana_saray</span>
            </div>
            <div className="contacts_div">
              <img
                className="contacts_imageIcon"
                src="icons/telegram.png"
                alt=""
              />
              <span className="contacts_text">+380988842079</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
