function Contacts(props) {
  return props ? (
    <div className="absolute bottom-10 right-64 ">
      <div
        className={
          props.showModal === true
            ? "   mt-32 w-80 bg-white-700 h-52 z-2 ease-in duration-500 rounded-tl-3xl  rounded-br-3xl shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]"
            : "  mt-64 opacity-0 w-80  max-w-52 h-52 z-2 bg-red-200 ease-in duration-300"
        }
      >
        <div className="p-4 flex flex-col gap-3 pl-14">
          <div className="flex gap-2 text-lg ">
            <img className="w-5 h-5" src="icons/viber2.png" alt="" />
            <span className="">+380988842079</span>
          </div>
          <div className="flex gap-2 text-lg">
            <img className="w-5 h-5" src="icons/insta.png" alt="" />
            <span>@dr_svetlana_saray</span>
          </div>
          <div className="flex gap-2 text-lg">
            <img className="w-5 h-5" src="icons/telegram.png" alt="" />
            <span>+380988842079</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Contacts;
