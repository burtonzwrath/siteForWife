
import { useNavigate } from "react-router";
import {
  CALC_ROUTE,
  ABOUT_ROUTE,
  DOSYAGNENYA_ROUTE,
} from "../constants/consts";


function Sun(props) {
  const navigate = useNavigate();
  const linksIcons = document.querySelectorAll(".links-icon");

    setTimeout(()=>{
      sessionStorage.setItem('animation',"true")
    },2000)


let animationState=  sessionStorage.getItem('animation')

 linksIcons.forEach((icon) => {
    const linkText = icon.nextSibling;

    icon.addEventListener("mouseenter", (e) => {
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
    <div className="   w-32 h-44 rounded-3xl relative flex  items-center justify-center  ">

      <div className={`${ animationState==="true"?"animate-sun2 ":" "}links absolute flex items-center rotate-90 translate-y-32 lg:translate-y-40   gap-4}`}>
        <div className="w-6 lg:w-10 h-px bg-gradient-to-l from-sky-200 to-transparent   "></div>
          <div
              onClick={() => props.setShowModal(true)}
              className="modalClass links-icon w-14 h-14 lg:w-20 lg:h-20   rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
          >
              <img
                  className=" modalClass -rotate-45 hover:animate-hover bg-contain"
                  src="icons/kapelnica.png"
                  alt=""
              />
          </div>
        <div className="link-text text-2xl opacity-0 pills-text   text-white absolute -rotate-90 left-28 ">
          Контакты
        </div>
      </div>
      <div className={`${ animationState==="true"?"animate-sun3 ":" "}links absolute flex items-center -rotate-90 -translate-y-24 lg:-translate-y-24  gap-4 `}>
        <div className="w-6 lg:w-10  h-px bg-gradient-to-l from-sky-200 to-transparent  "></div>
          <div
              onClick={() => navigate(DOSYAGNENYA_ROUTE)}
              className="links-icon w-14 h-14 lg:w-20 lg:h-20  rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
          >
              <img
                  className="-rotate-45 hover:animate-hover bg-contain"
                  src="icons/monitor.png"
                  alt=""
              />
          </div>
        <div className="link-text text-2xl opacity-0 pills-text rotate-90  text-white absolute left-24 ">
         Досягнення
        </div>
      </div>
      <div className={`${ animationState==="true"?"animate-sun4 ":" "}links  pills  absolute flex items-center rotate-180 -translate-x-20 lg:-translate-x-32 gap-4  `}>
        `
        <div className="w-8 lg:w-14  h-px bg-gradient-to-l from-sky-200 to-transparent   "></div>
        <div  className="links-icon w-14 h-14 lg:w-20 lg:h-20  rounded-full shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow">
          <img className="hover:animate-hover bg-contain" src="icons/pelula.png" alt="" />
        </div>
        <div className="link-text text-2xl opacity-0 pills-text rotate-180  text-white absolute left-48">
          Лекарства
        </div>
      </div>


      <div className={`${animationState === "true" ? "animate-sun7 " : " "}links absolute flex items-center -rotate-45 -translate-x-20 translate-y-20 lg:-translate-x-28 lg:translate-y-28  gap-4 `}>
        `
          <div
              onClick={() => {
                  navigate(ABOUT_ROUTE);
              }}
              className= "  links-icon w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow "
          >
              <img
                  className="decoration-red-500 hover:animate-hover bg-contain  "
                  src="icons/docIcon.png"
                  alt=""
              />

          </div>
        <div className=" link-text text-2xl opacity-0 pills-text -left-[75px] -top-[30px] rotate-45 text-white absolute ">
          Обо мне
        </div>
        <div className="w-6 lg:w-10  h-px bg-gradient-to-r from-sky-200 to-transparent  "></div>
      </div>
      <div className={`${animationState === "true" ? "animate-sun8 " : " "}links absolute z-0 flex items-center rotate-45 -translate-x-20 -translate-y-20  lg:-translate-x-28 lg:-translate-y-28  gap-4 `}>
        <div
          onClick={() => navigate(CALC_ROUTE)}
          className="links-icon w-14 h-14 lg:w-20 lg:h-20  rounded-full  shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] hover:animate-hoverShadow"
        >
          <img
            className="-rotate-45 hover:animate-hover bg-contain"
            src="icons/monitor.png"
            alt=""
          />
        </div>
        <div className=" link-text text-2xl opacity-0 pills-text -rotate-45 right-32 -bottom-5 text-white absolute ">
          Калькулятор
        </div>
        <div className="w-8 h-px bg-gradient-to-r from-sky-200 to-transparent   "></div>
      </div>

    </div>
  );
}
export default Sun;
