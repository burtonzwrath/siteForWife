import { auth } from "./firebase";
import {useTranslation} from "react-i18next";

function SignOut() {
    const { t } = useTranslation();
  return (
    <div className=" bg-green-100 absolute border rounded-full text-orange-300 w-14 lg:w-[6vmax] lg:h-[1.5vmax]   hover:text-white   flex justify-center hover:bg-orange-400">
      <button className="text-sm 2xl:text-[1vmax] " onClick={() => auth.signOut()}>
          {t('chat.logout')}
      </button>
    </div>
  );
}
export default SignOut;
