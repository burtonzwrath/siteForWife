import NavBar from "./NavBar";
import img from "../img/about.jpg";
import LengSwitcher from "./LengSwitcher";
import { useTranslation } from "react-i18next";
function Contacts(props) {
  const { t } = useTranslation();
  return (
    <div id="contacts" className=" contacts_wrapper ">
      <div className={props.nav === true ? "navBar_Show " : "navBar_Hide   "}>
        <NavBar nav={props.nav} setNav={props.setNav} />
        <div className="w-full"></div>
      </div>
      <div className=" lengSwitcher_wrapper ">
        <LengSwitcher animationState={props.animationState} />
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
