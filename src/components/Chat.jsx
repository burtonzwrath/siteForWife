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
  useEffect(() => {
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  }, []);
  const [msg, setMsg] = useState("");
  const [imageList, setImageList] = useState(null);
  const imageListRef = ref(storage, "images/");
  const scroll = useRef(null);
  const [progress, setProgress] = useState(0);
  const setImg = document.querySelector("#setImg");

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
    setProgress(0);
  };

  return (
    <div className="chat chat_wr">
      <div className="chat_singOut">
        <SignOut />
      </div>

      <button onClick={() => setShowChat(false)} className=" chat_hideChat ">
        hide chat
      </button>
      <div className="h-full relative flex flex-col justify-end ">
        <div className="h-[93%] ">
          <div className="overflow-hidden mb-3 h-[70%] ">
            <div className="chat-wrapper m-4  h-full border-2    overflow-y-scroll mt-4 rounded-xl flex flex-col gap-2 ">
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
                        ? " chat_rightMssg"
                        : "  chat_leftMssg "
                    }`}
                  >
                    <div className="chat_icon">
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
              <div ref={scroll}></div>
            </div>
          </div>
          <div className="w-full   h-[30%] ">
            <form className=" h-full" onSubmit={(e) => sendMessage(e)}>
              <div className="w-full h-full    bg-gray-50 rounded-lg border border-gray-200 rounded-xl">
                <div className=" chat_textAreaDiv ">
                  <div className=" p-2 ">
                    <textarea
                      required="false"
                      id="editor"
                      rows="2"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="chat_textArea"
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
              <button type="submit" className="  chat_buttonSubmit">
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
