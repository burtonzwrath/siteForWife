import Sun from "./Sun";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import img from "../img/hearthand2.jpg";
import img2 from "../img/fonNew2.jpg";
import ChatOnline from "./ChatOnline";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";

function MainPage(props) {
  const [showChat, setShowChat] = useState(false);
  const [lengEn,setLengEn] =useState(true)
  const [lengUkr,setLengUkr] =useState(false)
  const [animationState, setAnimationstate] = useState("true");
  const {  i18n } = useTranslation();


  function languageSwitcher(e,leng) {
    e.preventDefault()
    i18n.changeLanguage(leng);
    if(e.target.className.includes("false")){
      setLengEn(!lengEn)
      setLengUkr(!lengUkr)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      setAnimationstate("false");
    }, 6000);
  }, []);

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
            : "nav flex absolute h-screen z-40 -left-44 lg:-left-40  w-32 opacity-100     ease-in duration-700   "
        }
      >
        <NavBar
          nav={props.nav}
          setNav={props.setNav}
          showModal={props.showModal}
          setShowModal={props.setShowModal}
        />
        <div className="w-full"></div>
      </div>


      <div
        className={` ${
          animationState === "true" ? "animate-nameShow" : "opacity-95 z-10"
        } text-green-100 text-xl right-10 top-10 md:text-5xl md:left-[20vmax] z-10 xl:text-7xl absolute  xl:left-[16vmax] md:top-10 md:w-52 sm:h-40 font-['Italianno','cursive']  opacity-0`}
      >
      Dr.Svetlana Saray
      </div>

      <div className="w-screen overflow-hidden relative flex justify-center ">
        <div className=" z-50 absolute top-5 right-10  flex gap-5 animate-lengShow opacity-0">
          <div   role="button" className={` ${lengEn===false? "bg-green-100  ":"bg-green-300"  } ${lengEn}  border rounded-2xl w-10 h-6 text-center h-6 bg-green-100 hover:bg-sky-200 duration-100 focus:outline-none `} onClick={(e) => languageSwitcher(e,"en")}>En</div>
          <div   role="button" className={` ${lengUkr===false? "bg-green-100 ":"bg-green-300 "  } ${lengUkr}   border rounded-2xl w-10 h-6 text-center h-6 bg-green-100 hover:bg-sky-200 duration-100 focus:outline-none `} onClick={(e) => languageSwitcher(e,"ukr")}>Укр</div>
        </div>
        <div className="absolute h-screen w-screen flex justify-center items-center ">
          <ChatOnline setShowChat={setShowChat} showChat={showChat} />
        </div>

        <div className=" md:mr-32  container absolute items-center  justify-center  h-screen flex ">
          <div className="w-10 h-10 ">
            <Sun
              animationState={animationState}
              signWithGoogle={signWithGoogle}
              setShowChat={setShowChat}
              setNav={props.setNav}
            />
          </div>
        </div>
        <img
          className={`hidden md:block md:w-screen sm:absolute sm:h-screen sm:bg-contain ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          }  bg-no-repeat -z-10`}
          src={img}
          alt=""
        />

        <img
          className={`md:hidden ${
            animationState === "true" ? "animate-[blur_1.3s_linear]" : " "
          } w-screen h-screen bg-contain bg-no-repeat -z-10`}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}
export default MainPage;
