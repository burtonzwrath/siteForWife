import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./Chat";

function ChatOnline({ showChat, setShowChat }) {
  const [user] = useAuthState(auth);
  return (
    <div
      className={
        showChat
          ? "z-50 absolute w-[80vmin] h-[90vmax] md:w-[30vmax] md:h-[70vmin]   md:right-10 opacity-100 ease-in duration-500"
          : "z-20 absolute w-[80vmin] h-[90vmax]  md:w-[30vmax] md:h-[70vmin] absolute  opacity-0 ease-in duration-500"
      }
    >
      {user ? <Chat setShowChat={setShowChat} /> : ""}
    </div>
  );
}
export default ChatOnline;
