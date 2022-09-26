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
    sessionStorage.setItem("animation", "true");
  }, 2000);

  const animationState=sessionStorage.getItem("animation")

  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
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
    <div className=" h-screen flex w-screen justify-center bg-orange-50 absolute -z-20 ">
      <div className="w-screen overflow-hidden relative   ">
        <div className="absolute h-screen w-screen flex justify-center items-center md:justify-end md:pr-10">
          <ChatOnline setShowChat={setShowChat} showChat={showChat} />
        </div>

        <div
          className={
            props.nav === true
              ? "nav flex absolute h-screen  z-[100]  left-0    ease-in duration-500   "
              : "nav flex absolute h-screen z-[100] -left-36 w-32 top-100 opacity-100     ease-in duration-500   "
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
