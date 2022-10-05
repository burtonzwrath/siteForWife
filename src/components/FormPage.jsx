import NavBar from "./NavBar";
import image from "../img/form.jpg";
import { useTranslation } from "react-i18next";
import LengSwitcher from "./LengSwitcher";

function Form(props) {
  const { t } = useTranslation();

  function formSend(e) {
e.preventDefault()
    const form = document.querySelector("form");
    const dialog = document.querySelector("dialog")
    dialog.showModal();
     form.reset();
  }
  function closeModalWindow() {
    const dialog = document.querySelector("dialog");
    dialog.close();
  }

  return (
    <div className="h-screen w-screen flex justify-center bg-green-50">
      <img className="w-screen h-screen absolute" src={image} alt="" />
      <div>
        <div
          className={
            props.nav === true
              ? "nav flex absolute h-screen  z-20  left-0    ease-in duration-500   "
              : "nav flex absolute h-screen z-20 -left-44 lg:-left-40 2xl:-left-[11.4vmax] w-32 top-100 opacity-100     ease-in duration-500   "
          }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>
        </div>
      </div>
      <div className=" z-50 absolute top-5 right-10  flex gap-5 ">
        <LengSwitcher animationState={props.animationState} />
      </div>
      <div className="w-3/4 md:w-2/5 self-center">
        <div className=" container bg-white  z-40    ">
          <div className="space-y-5 ">
            <h4 className="text-center text-[6vmin] 2xl:text-[ sm:text-[2.3vmax] text-[#b9d4b3] font-semibold italic drop-shadow-lg ">
              {t("form.book")}
            </h4>

            <form   >

              <dialog className="   justify-center items-center w-[50vmax] lg:w-[35vmax]  rounded-2xl text-orange-500 text-xl  ">
                <div
                  onClick={() => closeModalWindow()}
                  className="  text-[2vmax] form closeModal absolute right-2 top-0 text-black"
                >
                  x
                </div>
                  <div className="p-[2vmax]">  <h1 className=" text-[3vmin]  md:text-[1.5vmax]  text-center">Ваше сообщение успешно отправлено</h1></div>

              </dialog>
              <div className="grid grid-cols-2 gap-[1vmax] 2xl:gap-[1.5vmax]">
                <input
                  type="text"
                  className=" 2xl:h-[3vmax] text-[1vmax]   drop-shadow-lg italic border-4  px-4 py-2  bg-stone-100  focus:outline-none transition duration-190 ease-out hover:ease-in  border-[#b9d4b3]  hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 rounded-tl-3xl  rounded-br-3xl "
                  placeholder={t("form.name")}
                />
                <input
                  type="text"
                  className=" 2xl:h-[3vmax] text-[1vmax]  drop-shadow-lg  italic border-4  px-4 py-2 bg-stone-100  focus:outline-none transition duration-190 ease-out hover:ease-in  border-[#b9d4b3]  hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 rounded-tl-3xl  rounded-br-3xl"
                  placeholder={t("form.surname")}
                />
                <input
                  type="email"
                  className="2xl:h-[3vmax] text-[1vmax]  drop-shadow-lg   italic border-4 px-4 py-2 bg-stone-100  focus:outline-none  transition duration-190 ease-out hover:ease-in   border-[#b9d4b3]   hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300  col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder={t("form.email")}
                />
                <input
                  type="tel"
                  className=" 2xl:h-[3vmax] text-[1vmax]   drop-shadow-lg  italic border-4  px-4 py-2  bg-stone-100  focus:outline-none transition duration-190 ease-out hover:ease-in   border-[#b9d4b3]   hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder={t("form.phone")}
                />
                <textarea
                  cols="10"
                  rows="5"
                  className=" drop-shadow-lg text-[1vmax]  italic border-4 border-[#b9d4b3] px-4 py-2 bg-stone-100  focus:outline-none transition duration-190 ease-out hover:ease-in    hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder={t("form.text")}
                ></textarea>

                <input
                  id="date"
                  type="datetime-local"
                  className="2xl:h-[3vmax] 2xl:w-[10vmax]  text-[1vmax]  w-40  drop-shadow-lg  border-4 border-[#b9d4b3] bg-stone-100  px-4 mt-2 py-2 transition duration-190 ease-out hover:ease-in focus:outline-none   hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 rounded-tl-3xl  rounded-br-3xl"
                />
              </div>

              <input
                  role="button"
                onClick={(e) => formSend(e)}
                value={t("form.button")}
                className="2xl:h-[3vmax] text-[1vmax]  text-center submit drop-shadow-lg  italic focus:outline-none mt-5 bg-[#b9d4b3] border-4 border-[#b9d4b3] px-4 py-2 text-black font-bold w-full rounded-tl-3xl  rounded-br-3xl   hover:border-b-orange-300 hover:border-r-orange-300 focus:border-orange-300 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
