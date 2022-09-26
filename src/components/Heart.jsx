function Heart() {
    let animationState = sessionStorage.getItem("animation");
  return (
    <div className={`   ${
        animationState === "true" ? "animate-sun1 " : " "
    }opacity-0 mr-3 sm:hidden mt-10  preloader absolute w-screen h-screen flex justify-center items-center z-0`}>

          <div className=" w-[16vmin] h-[12vmax] bg-black mb-14  absolute overflow-hidden relative flex items-center  justify-center rounded-full     ">
              <div className="h-20 w-14">    <img className="  h-20 w-20  bg-cover" src="img/heartBlue2.jpg" /></div>
              <div className="flex h-20 -ml-96 absolute gap-32 justify-between animate-move  ">
                  <div className="flex">
                      <div className=" bg-black   w-32 h-20   "></div>
                      <div className=" bg-black w-8 h-32  "></div>
                  </div>
                  <div className=" bg-black  w-64 h-32  top-0 "></div>
              </div>
          </div>

    </div>
  );
}

export default Heart;
