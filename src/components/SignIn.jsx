import firebase from "firebase/compat/app";
import { auth } from "./firebase";

function SignIn() {
  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button onClick={signWithGoogle}>sign in with google</button>
    </div>
  );
}

export default SignIn;
