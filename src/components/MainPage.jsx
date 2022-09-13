import Sun from "./Sun";
import { useEffect, useState } from "react";
import Contacts from "./Contacts";
import NavBar from "./NavBar";
import img from "../img/hearthand2.jpg";


function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        if (!e.target.classList.contains("modalClass")) {
          setShowModal(false);
        }
      },
      false
    );
  }, []);
  return (
    <div className=" h-screen flex justify-start  ">
<div className="w-[1280px] overflow-hidden relative  ">
        <div
            className={
                nav === true
                    ? "nav flex absolute h-screen  z-20  left-0    ease-in duration-500   "
                    : "nav flex absolute h-screen z-20 -left-28 w-32 top-100 opacity-100     ease-in duration-500   "
            }
        >

            <NavBar nav={nav} setNav={setNav} />
            <div className="w-full"></div>
        </div>

      <div className="  container absolute items-center  justify-center w-[1280px] h-screen flex ">

          <div className="w-32 xl:mr-32  ">
            <Contacts showModal={showModal} />
            <Sun
              setShowModal={setShowModal}
              showModal={showModal}
              setNav={setNav}
            />
          </div>

      </div>
        <img
            className="w-[1280px] absolute h-screen   bg-no-repeat left-1/2 transform -translate-x-1/2 -z-10"
            src={img}
            alt=""
        />
</div>
    </div>
  );
}
export default MainPage;
