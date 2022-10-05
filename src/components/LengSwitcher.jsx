import { useState } from "react";
import { useTranslation } from "react-i18next";

function LengSwitcher(props) {
  console.log(props.animationState);
  const [lengEn, setLengEn] = useState(true);
  const [lengUkr, setLengUkr] = useState(false);
  const { i18n } = useTranslation();

  function languageSwitcher(e, leng) {
    e.preventDefault();
    i18n.changeLanguage(leng);
    if (e.target.className.includes("false")) {
      setLengEn(!lengEn);
      setLengUkr(!lengUkr);
    }
  }
  return (
    <div
      className={`${
        props.animationState === "true" ? "animate-lengShow" : "opacity-50"
      } flex gap-3  opacity-0  z-50   `}
    >
      <div
        role="button"
        className={` ${
          lengEn === false ? "bg-green-100  " : "bg-green-300"
        } ${lengEn}  border rounded-2xl w-8 h-6 text-md  md:w-[3vmax] md:h-[3vmin] md:text-[1vmax] text-center bg-green-100 hover:bg-sky-200 duration-100 focus:outline-none `}
        onClick={(e) => languageSwitcher(e, "en")}
      >
        En
      </div>
      <div
        role="button"
        className={` ${
          lengUkr === false ? "bg-green-100 " : "bg-green-300 "
        } ${lengUkr}   border rounded-2xl w-8 h-6 text-md  md:w-[3vmax] md:h-[3vmin] md:text-[1vmax]  text-center h-6 bg-green-100 hover:bg-sky-200 duration-100 focus:outline-none `}
        onClick={(e) => languageSwitcher(e, "ukr")}
      >
        Укр
      </div>
    </div>
  );
}

export default LengSwitcher;
