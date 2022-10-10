import SignOut from "./SignOut";
import React, { useEffect, useState, useRef } from "react";
import { auth, storage, db } from "./firebase";
import {
  query,
  orderBy,
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  collection,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
export { useState, useEffect } from "react";

function Chat({ setShowChat }) {
  const [msg, setMsg] = useState("");
  const [imageList, setImageList] = useState(null);
  const imageListRef = ref(storage, "images/");
  const scroll = useRef(null);
  const [progress, setProgress] = useState(0);
  const setImg = document.querySelector("#setImg");

  useEffect(() => {
    console.log("useEffect", scroll);
    scroll.current.scrollIntoView(false);
    console.log("useEffect", scroll.current);
    //const scroll = document.querySelector('.chat-wrapper');
    //console.log('useEffect', scroll);
    //scroll.scrollTop = 1000;
  }, []);

  const uploadImage = (e) => {
    const imageUpload = e.target.files[0];
    if (imageUpload == null || imageListRef == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    const uploadTask = uploadBytesResumable(imageRef, imageUpload);
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    });
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList(url);
      });
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await setDoc(doc(db, "messages", msg), {
      text: msg,
      photoURL,
      uid,
      imgURL: imageList,
      createdAt: serverTimestamp(),
    });

    setMsg("");
    setImageList("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
    setImg.value = "";
  };

  const useFireStore = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      const fetch = async () => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(q, (querySnapshot) => {
          setMessages(
            querySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        });
      };
      fetch();
    }, []);
    return messages;
  };
  const mes = useFireStore();

  return (
    <div className=" bg-white z-[105] h-full  rounded-tl-2xl    chat flex flex-col  relative   shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)] ">
      <div className="absolute left-5 top-2 pr-1 pl-1 z-50">
        <SignOut />
      </div>

      <button
        onClick={() => setShowChat(false)}
        className=" z-50 text-sm 2xl:text-2xl border border-sky-200 bg-green-100 hover:bg-sky-500 hover:text-white absolute duration-150 right-5  top-2  text-sky-600 rounded-xl pr-1 pl-1  "
      >
        hide chat
      </button>
      <div className="h-full relative flex flex-col justify-end ">
        <div className="h-[95%] ">
          <div className="overflow-hidden mb-3 h-[70%] ">
            <div
              className="chat-wrapper m-4 h-full border-2    overflow-y-scroll mt-4 rounded-xl flex flex-col gap-2 shadow-[0_0_20px_10px_rgba(0,0,0,0.6) "
              ref={scroll}
            >
              {mes.map(({ id, text, photoURL, uid, imgURL }) => (
                <div
                  className={` pt-2 flex  msg ${
                    uid === auth?.currentUser?.uid
                      ? "justify-end"
                      : "justify-start "
                  }`}
                >
                  <div
                    key={id}
                    className={`msg ${
                      uid === auth?.currentUser?.uid
                        ? " w-[35vmin] md:w-[12vmax] h-auto flex  bg-sky-200   rounded-tl-3xl mr-4  rounded-br-3xl border-purple-500 overflow-hidden flex flex-col"
                        : "  w-[35vmin] md:w-[12vmax] h-auto flex  bg-purple-200  rounded-tr-3xl ml-4  rounded-bl-3xl border-purple-500 overflow-hidden flex flex-col "
                    }`}
                  >
                    <div className="border rounded-full border-white w-10 h-10  lg:w-[3vmax] lg:h-[3vmax] m-1 overflow-hidden ">
                      <img
                        className="w-10 h-10  lg:w-[3vmax] lg:h-[3vmax]"
                        referrerPolicy="no-referrer"
                        src={photoURL}
                        alt=""
                      />
                    </div>
                    <div className="border rounded-md m-1">
                      <p className="break-words text-xs w-full 2xl:text-2xl  p-2">
                        {text}
                      </p>
                    </div>
                    <img className="m-3 rounded" src={imgURL} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full   h-[30%] ">
            <form className=" h-full" onSubmit={(e) => sendMessage(e)}>
              <div className="w-full h-full    bg-gray-50 rounded-lg border border-gray-200 rounded-xl">
                <div className=" bg-white h-full rounded-b-lg  shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)] ">
                  <div className=" p-2 ">
                    <textarea
                      required="false"
                      id="editor"
                      rows="2"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="block   p-2  h-24 w-full text-sm  2xl:text-2xl  text-gray-800 bg-white border-0 h-full"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className=" absolute bottom-0 left-4">
                <input
                  className="text-[13px] 2xl:text-2xl "
                  type="file"
                  name="select image"
                  id="setImg"
                  onChange={uploadImage}
                />
                <h2 className="text-sm 2xl:text-2xl   ">
                  Uploaded {progress} %
                </h2>
              </div>
              <button
                type="submit"
                className="  text-sm 2xl:text-2xl  absolute bottom-2 right-4 inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-white bg-green-600 opacity-70 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Вiдправити
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
