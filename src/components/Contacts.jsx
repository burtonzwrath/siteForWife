import NavBar from "./NavBar";
import img from "../img/about.jpg"
import LengSwitcher from "./LengSwitcher";
function Contacts(props) {
  return (
    <div
      id="contacts"
      className=" h-screen  w-full justify-center  flex items-center "
    >
      <div
        className={
          props.nav === true
            ? "nav flex absolute h-screen  z-20  left-0    ease-in duration-500   "
            : "nav flex absolute h-screen z-20 -left-44 lg:-left-40 w-32 top-100 opacity-100     ease-in duration-500   "
        }
      >
        <NavBar nav={props.nav} setNav={props.setNav} />
        <div className="w-full"></div>
      </div>
      <div className=" z-50 absolute top-5 right-10  flex gap-5 ">
        <LengSwitcher animationState={props.animationState} />
      </div>
      <div
        className={
          "h-[80vmax] w-5/6 flex flex-col sm:h-[80vmin] sm:w-1/3 sm:flex justify-center  gap-2 items-center bg-white rounded-tl-3xl  rounded-br-3xl shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]"
        }
      >
          <div className="flex p-[2vmax] flex-col md:flex-row">
          <div><img className="  w-48 sm:w-80 rounded-tl-3xl  rounded-br-3xl  " src={img} alt=""/></div>
        <div className="p-4 flex flex-col gap-3 pl-[2vmax]">
          <div className="flex gap-2 text-lg ">
            <img className="w-5 h-5" src="icons/viber2.png" alt="" />
            <span className="text-[1vmax]">+380988842079</span>
          </div>
          <div className="flex gap-2 text-lg">
            <img className="w-5 h-5" src="icons/insta.png" alt="" />
            <span className="text-[1vmax]">@dr_svetlana_saray</span>
          </div>
          <div className="flex gap-2 text-lg">
            <img className="w-5 h-5" src="icons/telegram.png" alt="" />
            <span className="text-[1vmax]">+380988842079</span>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
}
export default Contacts;
