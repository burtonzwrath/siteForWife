import NavBar from "./NavBar";
import image from "../img/form.jpg"
function Form(props) {
  return (
    <div className="h-screen w-screen flex justify-center bg-green-50">
      <img className="w-screen h-screen absolute" src={image} alt=""/>
      <div>
        <div
          className={
            props.nav === true
              ? "nav flex absolute h-screen  z-20  left-0    ease-in duration-500   "
              : "nav flex absolute h-screen z-20 -left-44 lg:-left-36 w-32 top-100 opacity-100     ease-in duration-500   "
          }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>
        </div>
      </div>
      <div className="h-3/4 w-3/4 md:w-2/5 self-center">
        <div className=" container bg-white  z-40    ">
          <div className="p-5 space-y-5 ">
            <h4 className="text-center text-[6vmin] sm:text-[2.3vmax] text-sky-700 font-semibold italic drop-shadow-lg ">
              Записаться на прием
            </h4>

            <form>
              <div className="grid grid-cols-2 gap-[1vmax]">
                <input
                  type="text"
                  className="  drop-shadow-lg italic border-4  border-sky-200 px-4 py-2 focus:outline-none hover:border-b-sky-400 transition duration-190 ease-out hover:ease-in hover:border-r-sky-400 focus:border-sky-400 rounded-tl-3xl  rounded-br-3xl"
                  placeholder="Имя"
                />
                <input
                  type="text"
                  className=" drop-shadow-lg  italic border-4 border-sky-200 px-4 py-2 focus:outline-none transition duration-190 ease-out hover:ease-in  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400 rounded-tl-3xl  rounded-br-3xl"
                  placeholder="Фамилия"
                />
                <input
                  type="email"
                  className=" drop-shadow-lg   italic border-4 border-sky-200 px-4 py-2 focus:outline-none  transition duration-190 ease-out hover:ease-in  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400 col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className=" drop-shadow-lg  italic border-4 border-sky-200 px-4 py-2 focus:outline-none transition duration-190 ease-out hover:ease-in  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400 col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder="Телефон"
                />
                <textarea
                  cols="10"
                  rows="5"
                  className=" drop-shadow-lg  italic border-4 border-sky-200 px-4 py-2 focus:outline-none transition duration-190 ease-out hover:ease-in  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400 col-span-2 rounded-tl-3xl  rounded-br-3xl"
                  placeholder="Опишите вкратце причину вашего обращения..."
                ></textarea>

                  <input
                    id="date"
                    type="datetime-local"
                    className=" w-40  drop-shadow-lg  border-4 border-sky-200 px-4 mt-2 py-2 transition duration-190 ease-out hover:ease-in focus:outline-none  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400  rounded-tl-3xl  rounded-br-3xl"
                  />

              </div>

              <input
                type="submit"
                value="Отправить"
                className=" drop-shadow-lg  italic focus:outline-none mt-5 bg-sky-600 px-4 py-2 text-white font-bold w-full rounded-tl-3xl  rounded-br-3xl"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
