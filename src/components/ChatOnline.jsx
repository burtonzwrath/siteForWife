import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./Chat";

function ChatOnline({showChat,setShowChat}) {
  const [user] = useAuthState(auth);
  return <div  className={showChat?"z-50 absolute  md:w-80 md:h-80  opacity-100 ease-in duration-500":"z-20  xl:mr-52  w-80 h-80 absolute right-10 opacity-0 ease-in duration-500" }>{user ? <Chat setShowChat={setShowChat} /> : ""}</div>;
}
export default ChatOnline;
