import { auth } from "./firebase";

function SignOut() {
  return (
    <div className=" bg-white block border rounded-full text-sky-600 w-20 absolute -top-10 right-5 flex justify-center">
      <button  onClick={() => auth.signOut()}>sign out</button>
    </div>
  );
}
export default SignOut;
