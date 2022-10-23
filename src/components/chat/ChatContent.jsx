import { auth } from "../../firebase/firebase";
import React, { useRef } from "react";

function ChatContent({ recievedMessages, scroll }) {
  return (
    <div className="chat-wrapper m-4  h-full border-2    overflow-y-scroll mt-4 rounded-xl flex flex-col gap-2 ">
      {recievedMessages.map(({ id, text, photoURL, uid, imgURL }) => (
        <div
          key={id}
          className={` pt-2 flex  msg ${
            uid === auth?.currentUser?.uid ? "justify-end" : "justify-start "
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
  );
}

export default ChatContent;
