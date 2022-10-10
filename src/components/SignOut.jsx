import { auth } from "./firebase";

function SignOut() {
  return (
    <div className=" bg-green-100 absolute border rounded-full text-orange-300 w-14 lg:w-24   hover:text-white   flex justify-center hover:bg-orange-400">
      <button className="text-sm 2xl:text-lg " onClick={() => auth.signOut()}>
        log out
      </button>
    </div>
  );
}
export default SignOut;
