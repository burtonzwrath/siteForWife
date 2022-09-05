import Heart from "./Heart";
import { useNavigate } from "react-router";
import {CALC_ROUTE, ABOUT_ROUTE, DOSYAGNENYA_ROUTE} from "../constants/consts";

function Sun() {
  const navigate = useNavigate();
  const linksIcons = document.querySelectorAll(".links-icon");

  linksIcons.forEach((icon) => {
    const linkText = icon.nextSibling;

    icon.addEventListener("mouseenter", (e) => {
      console.log(linkText);
      linkText.style.opacity = "1";
      linkText.style.transition = "opacity 0.5s linear";
      icon.style.transform = "scale(1.1)";
      icon.style.transition = "transform 0.1s linear";
    });
    icon.addEventListener("mouseleave", (e) => {
      linkText.style.opacity = "0";
      icon.style.transform = "scale(1)";
      icon.style.transition = "transform 0.1s linear";
    });
  });

  return (
    <div className="w-80 h-80 rounded-3xl relative flex  items-center justify-center mt-20 mr-28  ">
      <div onClick={()=>{navigate(ABOUT_ROUTE)}} className="links absolute flex items-center  translate-x-40  animate-sun1 gap-4">
        <div className="w-32 h-px   bg-gradient-to-l from-sky-200 to-transparent "></div>
        <div className="links-icon w-20 h-20 rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow ">
          <img
            className="w-24 h-28 decoration-red-500 hover:animate-hover "
            src="icons/docIcon.png"
            alt=""
          />
          <img src="ellipse" alt="" />
        </div>
        <div className="link-text  text-2xl opacity-0  pills-text  text-white absolute ml-[270px]">
          Доктор
        </div>
      </div>
      <div className="links absolute flex items-center rotate-90 translate-y-40  gap-4 animate-sun2">
        <div className="w-32 h-px bg-gradient-to-l from-sky-200 to-transparent   "></div>
        <div className=" links-icon w-24 h-24 rounded-full   shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img
            className="-rotate-90 hover:animate-hover"
            src="icons/doc.png"
            alt=""
          />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text   text-white absolute -rotate-90 ml-[230px] ">
          Аптечка
        </div>
      </div>
      <div className=" links absolute flex items-center -rotate-90 -translate-y-40  gap-4 animate-sun3">
        <div className="w-32 h-px bg-gradient-to-l from-sky-200 to-transparent  "></div>
        <div className="links-icon w-24 h-24    rounded-full shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img
            className="rotate-90 hover:animate-hover"
            src="icons/kaplya.png"
            alt=""
          />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text rotate-90  text-white absolute ml-[260px] ">
          Капля
        </div>
      </div>
      <div className="links  pills  absolute flex items-center rotate-180 -translate-x-40 gap-4 animate-sun4 ">
        `
        <div className="w-32 h-px bg-gradient-to-l from-sky-200 to-transparent   "></div>
        <div className="links-icon w-24 h-24  rounded-full shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img className="hover:animate-hover" src="icons/pelula.png" alt="" />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text rotate-180  text-white absolute ml-[300px]">
          Лекарства
        </div>
      </div>
      <div className=" links absolute flex items-center rotate-45 translate-x-32 translate-y-32 gap-4 animate-sun5">
        `
        <div className="w-32 h-px bg-gradient-to-l from-sky-200 to-transparent   "></div>
        <div className="links-icon w-24 h-24   rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img
            className="-rotate-45 hover:animate-hover"
            src="icons/kapelnica.png"
            alt=""
          />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text -rotate-45 left-[240px] top-[60px] text-white absolute ">
          Капельница
        </div>
      </div>
      <div onClick={()=>{navigate(DOSYAGNENYA_ROUTE)}} className="links absolute flex items-center -rotate-45 translate-x-32 -translate-y-32 gap-4 animate-sun6">
        `
        <div className="w-32 h-px bg-gradient-to-l from-sky-200 to-transparent  "></div>
        <div className="links-icon w-24 h-24   rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img className="hover:animate-hover" src="icons/wpric.png" alt="" />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text rotate-45 ml-[280px] mt-[100px]  text-white absolute ">
          Шприц
        </div>
      </div>

      <div className="links absolute flex items-center -rotate-45 -translate-x-32 translate-y-32 gap-4 animate-sun7">
        `
        <div className="links-icon w-24 h-24 rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img
            className="rotate-45 hover:animate-hover"
            src="icons/serdce.png"
            alt=""
          />
        </div>
        <div className=" link-text text-2xl opacity-0 pills-text -left-[70px] -top-[30px] rotate-45 text-white absolute ">
          Сердце
        </div>
        <div className="w-32 h-px bg-gradient-to-r from-sky-200 to-transparent  "></div>
      </div>
      <div className="links absolute z-0 flex items-center rotate-45 -translate-x-32 -translate-y-32 gap-4 animate-sun8">
        <div
          onClick={() => navigate(CALC_ROUTE)}
          className="links-icon w-24 h-24  rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="-rotate-45 hover:animate-hover"
            src="icons/monitor.png"
            alt=""
          />
        </div>
        <div className=" link-text text-2xl opacity-0 pills-text -rotate-45 right-64 -bottom-5 text-white absolute ">
          Монитор
        </div>
        <div className="w-32 h-px bg-gradient-to-r from-sky-200 to-transparent   "></div>
      </div>
      <div className="w-44 h-40 rounded-3xl flex  items-center  animate-hide mb-10 ml-5 ">
        <Heart />
      </div>
    </div>
  );
}
export default Sun;
