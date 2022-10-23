import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import SignOut from "../mainPage/SignOut";
import { auth, storage, db } from "../../firebase/firebase";

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
import ChatContent from "./ChatContent";

function Chat({ setShowChat }) {
  const scroll = useRef(null);
  const { t } = useTranslation();
  const [msg, setMsg] = useState("");
  const [imageList, setImageList] = useState(null);
  const imageListRef = ref(storage, "images/");
  const [progress, setProgress] = useState(0);
  const setImg = document.querySelector("#setImg");

  useEffect(() => {
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }, 1000);
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

  const recievedMessages = useFireStore();

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
        {t("chat.hide")}
      </button>
      <div className="h-full relative flex flex-col justify-end ">
        <div className="h-[93%] ">
          <div className="overflow-hidden mb-3 h-[70%] ">
            <ChatContent recievedMessages={recievedMessages} scroll={scroll} />
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
                      placeholder={t("chat.placeholder")}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className=" absolute bottom-0 left-4">
                <input
                  className=" text-xs  md:text-[1vmax]  "
                  type="file"
                  name="select image"
                  id="setImg"
                  onChange={uploadImage}
                />
                <h2 className="text-xs  md:text-[1vmax]   ">
                  {t("chat.uploaded")} {progress} %
                </h2>
              </div>
              <button type="submit" className="  chat_buttonSubmit">
                {t("chat.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
