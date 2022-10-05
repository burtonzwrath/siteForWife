import Carousel from "./Carousel";
import NavBar from "./NavBar";
import image from "../img/dost2.jpg"
import {useTranslation} from "react-i18next";
import LengSwitcher from "./LengSwitcher";
function Dosyagnenya(props) {
    const { t} = useTranslation();
  return (
    <div className="flex h-screen  justify-center items-center  ">
        <img className="absolute w-screen h-screen" src={image} alt=""/>
      <div
          className={
            props.nav === true
                ? "nav flex absolute h-screen  z-40  left-0    ease-in duration-500   "
                : "nav flex absolute h-screen z-40 -left-44 lg:-left-40 2xl:-left-[11.4vmax] w-32 top-100 opacity-100     ease-in duration-500   "
          }
      >
        <NavBar nav={props.nav} setNav={props.setNav} />
        <div className="w-full"></div>

      </div>
        <div className=" z-50 absolute top-5 right-10  flex gap-5 ">
            <LengSwitcher animationState={props.animationState} />
        </div>
      <div className=" h-[65vmax] sm:h-[80vmin] w-5/6 relative p-5 2xl:p-[2vmax]  sm:w-1/2 rounded-tl-3xl  rounded-br-3xl  z-10 bg-white  flex justify-center items-center shadow-[0_0_20px_10px_rgba(0,0,0,0.6)  shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]">
          <div className="pb-5 absolute top-10 2xl:top-[3vmax]">
              <h1 className="text-center text-xl 2xl:text-[1.5vmax]">{t("achievement.text")}</h1>
          </div>
          <div className=" flex flex-col w-full align-center justify-center ">

          <div className="w-full self-center ">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dosyagnenya;
