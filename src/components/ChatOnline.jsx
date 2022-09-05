import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./Chat";
import SignIn from "./SignIn";

function ChatOnline() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}
export default ChatOnline;
