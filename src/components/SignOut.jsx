import { auth } from "./firebase";

function SignOut() {
  return (
    <div className=" bg-white absolute border rounded-full text-orange-300 w-16   left-1 top-1 flex justify-center">
      <button className="text-sm" onClick={() => auth.signOut()}>log out</button>
    </div>
  );
}
export default SignOut;
