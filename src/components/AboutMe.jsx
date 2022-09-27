import NavBar from "./NavBar";
function AboutMe(props) {
  return (
    <div className="flex h-screen w-screen absolute bg-green-50 ">

        <div
            className={
              props.nav === true
                  ? "nav flex absolute h-screen  z-40  left-0    ease-in duration-500   "
                  : "nav flex absolute h-screen z-40 -left-44 lg:-left-36 w-32 top-100 opacity-100     ease-in duration-500   "
            }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>

      </div>

      <div className="  z-20 rounded-xl mx-auto p-[2vmax] w-5/6 sm:w-1/2 m-10 bg-white  shadow-shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]">
        <div>
          <h1 className="text-center">Давайте знакомиться )</h1>
        </div>
        <div className="flex w-full gap-10 mt-[1vmax]">
          <div className="grow ">
            <div className="max-w-xl">
              <p className="first-letter:ml-3">Я Светлана Александровна</p>
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


            <div className="" >
              <img  className="rounded-xl object-cover  w-[40vmax] h-[30vmax] " src="img/about2.jpg" alt="" />
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
