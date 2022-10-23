import Sun from "./Sun";
import { useEffect, useState } from "react";

import NavBar from "../navbar/NavBar";
import img from "../../img/hearthand2.jpg";
import img2 from "../../img/fonNew2.jpg";
import ChatOnline from "../chat/ChatOnline";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase/firebase";
import LengSwitcher from "./LengSwitcher";

function MainPage({ nav, setNav, animationState, showModal, setShowModal }) {
  const [showChat, setShowChat] = useState(false);

  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  useEffect(() => {
    if (window.screen.width > 640) {
      setTimeout(() => {
        setNav(true);
      }, 4000);
    }
  }, []);

  return (
    <div className="main_wrapper">
      <div className={nav === true ? "navBar_Show " : "navBar_Hide   "}>
        <NavBar
          nav={nav}
          setNav={setNav}
          showModal={showModal}
          setShowModal={setShowModal}
          animationState={animationState}
        />
      </div>

      <div className="main_nameWrapper">
        <div
          className={` ${
            animationState === "true" ? "animate-nameShow" : "opacity-95 z-10"
          } main_nameStyle`}
        >
          Dr.Svetlana Saray
        </div>
      </div>

      <div className="main_contentWrapper ">
        <div
          className={`${
            animationState === "true" ? "animate-lengShow" : "opacity-70"
          }  lengSwitcher_wrapper opacity-0  `}
        >
          <LengSwitcher animationState={animationState} />
        </div>
        <div className="chat_wrapper ">
          <ChatOnline setShowChat={setShowChat} showChat={showChat} />
        </div>

        <div className=" sun_wrapper  ">
          <div className="w-10 h-10  ">
            <Sun
              animationState={animationState}
              signWithGoogle={signWithGoogle}
              setShowChat={setShowChat}
              setNav={setNav}
            />
          </div>
        </div>
        <img
          className={`main_image ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          }  bg-no-repeat -z-10`}
          src={img}
          alt=""
        />

        <img
          className={`md:hidden ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          } main_imageMobile`}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}
export default MainPage;
