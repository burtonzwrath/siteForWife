import NavBar from "../navbar/NavBar";
import image from "../../img/form.jpg";
import { useTranslation } from "react-i18next";
import LengSwitcher from "../mainPage/LengSwitcher";

function Form({ nav, setNav, animationState }) {
  const { t } = useTranslation();

  function formSend(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    form.reset();
  }

  function closeModalWindow() {
    const dialog = document.querySelector("dialog");
    dialog.close();
  }

  return (
    <div className="form_wrapper">
      <img className="form_mainImage" src={image} alt="" />
        <div className={nav === true ? "navBar_Show  " : "navBar_Hide   "}>
          <NavBar nav={nav} setNav={setNav} />
        </div>
      <div className=" lengSwitcher_wrapper ">
        <LengSwitcher animationState={animationState} />
      </div>
      <div className="formContent_wrapper">
        <div className="  bg-white  z-40    ">
          <div className="space-y-5 ">
            <h4 className="form_mainText ">{t("form.book")}</h4>

            <form>
              <dialog className="form_dialog ">
                <div
                  onClick={() => closeModalWindow()}
                  className="  form_dialogClose"
                >
                  x
                </div>
                <div className="p-[2vmax]">
                  <h1 className=" form_dialogSendText">{t("form.send")}</h1>
                </div>
              </dialog>
              <div className="formMainContent_wrapper">
                <input
                  type="text"
                  className=" form_input"
                  placeholder={t("form.name")}
                />
                <input
                  type="text"
                  className=" form_input"
                  placeholder={t("form.surname")}
                />
                <input
                  type="email"
                  className="form_input"
                  placeholder={t("form.email")}
                />
                <input
                  type="tel"
                  className=" form_input"
                  placeholder={t("form.phone")}
                />
                <textarea
                  cols="10"
                  rows="5"
                  className=" form_textArea"
                  placeholder={t("form.text")}
                ></textarea>
                <input id="date" type="datetime-local" className="form_date" />
              </div>

              <input
                role="button"
                onClick={(e) => formSend(e)}
                value={t("form.button")}
                className="form_button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
