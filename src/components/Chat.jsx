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
      console.log('useEffect', scroll);
      scroll.current.scrollIntoView(false);
     console.log('useEffect', scroll.current);
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
    <div className=" bg-white z-[105] h-full  chat flex flex-col w-[95vmin] relative md:w-80 shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)] rounded-xl ">
      <SignOut />
      <button
        onClick={() => setShowChat(false)}
        className=" text-sm absolute right-1  top-1 bg-white text-sky-600 rounded-xl pr-1 pl-1 "
      >
        hide chat
      </button>
      <div className="pt-5 pb-2 pl-5 overflow-hidden">
        <div  className="chat-wrapper  w-72 h-80  overflow-y-scroll mt-4 rounded-xl flex flex-col gap-2 shadow-[0_0_20px_10px_rgba(0,0,0,0.6) " ref={scroll}>
          {mes.map(({ id, text, photoURL, uid, imgURL }) => (
            <div className=" pt-2 ">
              <div
                key={id}
                className={`msg ${
                  uid === auth?.currentUser?.uid
                    ? "w-44 h-auto flex  bg-sky-200  rounded-tl-3xl  rounded-br-3xl border-purple-500 overflow-hidden ml-20 flex flex-col"
                    : "w-44 h-auto flex  bg-purple-200  rounded-tr-3xl  rounded-bl-3xl border-purple-500 overflow-hidden flex flex-col "
                }`}
              >
                <div className="border rounded-full border-white w-10 h-10 m-1 overflow-hidden">
                  <img
                    className="w-10 h-10"
                    referrerPolicy="no-referrer"
                    src={photoURL}
                    alt=""
                  />
                </div>
                <div className="border rounded-md m-1">
                  <p className="break-words text-xs w-full p-2">{text}</p>
                </div>
                <img className="m-3 rounded" src={imgURL} alt="" />
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="h-24  w-full relative  ">
        <form className=" relative" onSubmit={(e) => sendMessage(e)}>
          <div className="w-full bg-gray-50 rounded-lg border border-gray-200 rounded-xl">
            <div className=" px-4 bg-white rounded-b-lg shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_10px_1px_rgba(0,0,0,0.6)] ">
            <div className="p-3">
              <textarea required='false'
                id="editor"
                rows="2"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="block  px-0 mb-2 h-20 w-full text-sm text-gray-800 bg-white border-0"
                placeholder="Write an article..."
                required
              ></textarea>
              <input
                type="file"
                name="select image"
                id="setImg"
                onChange={uploadImage}
              />
              <h2 className="text-xs pb-3 m-2">Uploaded {progress} %</h2>
            </div>
            </div>
          </div>
          <button
            type="submit"
            className=" h-6 text-sm absolute bottom-4 right-4 inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Вiдправити
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
