import Sun from "./Sun";
import { useEffect, useState } from "react";
import Contacts from "./Contacts";
import NavBar from "./NavBar";
import img from "../img/hearthand2.jpg";
import img2 from "../img/fonNew2.jpg";
import ChatOnline from "./ChatOnline";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";

function MainPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);

  setTimeout(() => {
    sessionStorage.setItem("animation", "false");
  }, 8000);

  const animationState = sessionStorage.getItem("animation");

  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  useEffect(() => {
    if (window.screen.width > 640)
      setTimeout(() => {
        props.setNav(true);
      }, 6000);
    document.addEventListener(
      "click",
      (e) => {
        if (!e.target.classList.contains("modalClass")) {
          setShowModal(false);
        }
      },
      false
    );
  }, []);
  return (
    <div className=" h-screen flex w-screen justify-center bg-orange-50 absolute -z-20 ">
      <div className={` ${animationState==="true"? "animate-nameShow":"opacity-95" } text-green-100 text-xl right-10 top-10 sm:text-5xl sm:left-[20vmax] z-50 xl:text-7xl absolute  xl:left-[16vmax] sm:top-10 sm:w-52 sm:h-40 font-['Italianno','cursive']  opacity-0`}>
        Dr.Svetlana Saray
      </div>
      <div className="w-screen overflow-hidden relative   ">
        <div className="absolute h-screen w-screen flex justify-center items-center md:justify-end md:pr-10">
          <ChatOnline setShowChat={setShowChat} showChat={showChat} />
        </div>

        <div
          className={
            props.nav === true
              ? "nav flex absolute h-screen  z-40  lg:left-0  ease-in duration-700  "
              : "nav flex absolute h-screen z-40 -left-44 lg:-left-36  w-32 top-100 opacity-100     ease-in duration-700   "
          }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>
        </div>

        <div className="  container absolute items-center  justify-center w-screen h-screen flex ">
          <div className="w-10 h-10  ">
            <Contacts showModal={showModal} />
            <Sun
              signWithGoogle={signWithGoogle}
              setShowChat={setShowChat}
              setShowModal={setShowModal}
              showModal={showModal}
              setNav={props.setNav}
            />
          </div>
        </div>
        <img
          className={`hidden sm:block sm:w-screen sm:absolute sm:h-screen sm:bg-contain ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          }  bg-no-repeat -z-10`}
          src={img}
          alt=""
        />
        <img
          className={`sm:hidden ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          } w-[640px] h-screen bg-contain bg-no-repeat -z-10`}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}
export default MainPage;
