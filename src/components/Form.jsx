function Form() {
  return (
    <div className="relative container mx-auto my-20 w-1/3  bg-white rounded-tl-3xl  rounded-br-3xl shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]">
      <div className="p-5 space-y-5 ">
        <h4 className="text-center text-3xl text-sky-700 font-semibold italic drop-shadow-lg ">Записаться на прием</h4>

        <form>
          <div className="grid grid-cols-2 gap-5" >
            <input
              type="text"
              className=" drop-shadow-lg italic border-4  border-sky-200 px-4 py-2 focus:outline-none hover:border-b-sky-400 transition duration-190 ease-out hover:ease-in hover:border-r-sky-400 focus:border-sky-400 rounded-tl-3xl  rounded-br-3xl"
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
            <label htmlFor="date" className="w-80 text-gray-500 italic">
              Выберите дату/время возможной записи
              <input id="date"  type="datetime-local" className=" drop-shadow-lg  border-4 border-sky-200 px-4 mt-2 py-2 transition duration-190 ease-out hover:ease-in focus:outline-none  hover:border-b-sky-400 hover:border-r-sky-400 focus:border-sky-400  rounded-tl-3xl  rounded-br-3xl"/>
            </label>

          </div>

          <input
            type="submit"
            value="Отправить"
            className=" drop-shadow-lg  italic focus:outline-none mt-5 bg-sky-600 px-4 py-2 text-white font-bold w-full rounded-tl-3xl  rounded-br-3xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
