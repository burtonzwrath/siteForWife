import Sun from "./Sun";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import img from "../img/hearthand2.jpg";
import img2 from "../img/fonNew2.jpg";
import ChatOnline from "./ChatOnline";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";
import LengSwitcher from "./LengSwitcher";

function MainPage(props) {
  const [showChat, setShowChat] = useState(false);

  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  useEffect(() => {
    if (window.screen.width > 640) {
      setTimeout(() => {
        props.setNav(true);
      }, 4000);
    }
  }, []);

  return (
    <div className=" h-screen flex w-screen  bg-orange-50 absolute -z-20 ">
      <div
        className={
          props.nav === true
            ? "nav flex absolute h-screen  z-40  left-0  ease-in duration-700  "
            : "nav flex absolute h-screen z-40 -left-44 lg:-left-40 2xl:-left-[11.4vmax]  w-32 opacity-100     ease-in duration-700   "
        }
      >
        <NavBar
          nav={props.nav}
          setNav={props.setNav}
          showModal={props.showModal}
          setShowModal={props.setShowModal}
          animationState={props.animationState}
        />
        <div className="w-full"></div>
      </div>

<div className="w-full absolute flex justify-center top-[10vmax] md:right-[3vmax] md:top-[2.3vmax]  sm:mt-0">
    <div
        className={` ${
            props.animationState === "true" ? "animate-nameShow" : "opacity-95 z-10"
        } text-green-100 text-4xl md:text-[6vmin]     font-['Italianno','cursive']  opacity-0`}
    >
        Dr.Svetlana Saray
    </div>
</div>


      <div className="w-screen overflow-hidden relative flex justify-center ">
        <div       className={`${
            props.animationState === "true" ? "animate-lengShow" : "opacity-70"
        }  opacity-0  z-50 absolute top-6 right-10 `}   >
     <LengSwitcher animationState={props.animationState}  />
        </div>
        <div className="absolute h-screen w-screen flex justify-center items-center ">
          <ChatOnline setShowChat={setShowChat} showChat={showChat} />
        </div>

        <div className=" md:mr-[10vmax]  container absolute items-center  justify-center  h-screen flex ">
          <div className="w-10 h-10 ">
            <Sun
              animationState={props.animationState}
              signWithGoogle={signWithGoogle}
              setShowChat={setShowChat}
              setNav={props.setNav}
            />
          </div>
        </div>
        <img
          className={`hidden md:block md:w-screen sm:absolute sm:h-screen sm:bg-contain ${
            props.animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          }  bg-no-repeat -z-10`}
          src={img}
          alt=""
        />

        <img
          className={`md:hidden ${
            props.animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          } w-screen h-screen bg-contain bg-no-repeat -z-10`}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}
export default MainPage;
