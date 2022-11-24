import { useState } from "react";
import { useTranslation } from "react-i18next";

function LengSwitcher() {
  const [lengEn, setLengEn] = useState(true);
  const [lengUkr, setLengUkr] = useState(false);
  const { i18n } = useTranslation();

  function languageSwitcher(e, leng) {
    e.preventDefault();
    i18n.changeLanguage(leng);
    if (!e.currentTarget.className.includes("bg-green-300")) {
      setLengEn(!lengEn);
      setLengUkr(!lengUkr);
    }
  }

  return (
    <div className=" lengSwitcherComponent_wrapper ">
      <div
        role="button"
        className={` ${
          lengEn === false ? "bg-green-100" : "bg-green-300"
        } ${lengEn}  lengSwitcher_en`}
        onClick={(e) => languageSwitcher(e, "en")}
      >
        <div>En</div>
      </div>
      <div
        role="button"
        className={` ${
          lengUkr === false ? "bg-green-100 " : "bg-green-300 "
        } ${lengUkr} lengSwitcher_ukr `}
        onClick={(e) => languageSwitcher(e, "ukr")}
      >
        <div>Укр</div>
      </div>
    </div>
  );
}

export default LengSwitcher;
