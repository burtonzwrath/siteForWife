import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import LengSwitcher from "./LengSwitcher";
function AboutMe(props) {
  const {t} = useTranslation();
  return (
    <div className="flex h-screen w-screen  justify-center absolute bg-green-50 ">
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
      <div className=" z-50 absolute top-5 right-10  ">
        <LengSwitcher animationState={props.animationState} />
      </div>
      <div className=" p-[4vmin] 2xl:p-[2vmax]  z-20 rounded-tl-3xl   rounded-br-3xl self-center      w-5/6 lg:w-[60vmax] bg-white  shadow-shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]">

        <div className=" 2xl:text-[1.5vmax]" >
          <h1 className="text-center">   {t("aboutMe.intro")} </h1>
        </div>
        <div className="flex w-full flex flex-col lg:flex-row gap-10 mt-[1vmax]">
          <div className="grow ">
            <div className="max-w-xl 2xl:text-[1.5vmax]">
              <p className="first-letter:ml-3">{t("aboutMe.name")}</p>
              <br/>
              <div className="min-w-fit">
              <p className=" text-[1vmax] first-letter:ml-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos minima, quos! Aliquam aut blanditiis culpa dolores
                eligendi expedita, illum molestiae numquam provident quod. Culpa
                dolorem doloribus eos, provident quas vitae?
              </p>
              </div>
            </div>
          </div>


            <div className="  flex justify-center" >
              <img  className="object-cover rounded-tl-3xl  rounded-br-3xl  w-80 " src="img/about2.jpg" alt="" />
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
