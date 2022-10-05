import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";
import "./App.css";

import AppRouter from "./components/AppRouter";
import {useEffect, useState} from "react";
import Heart from "./components/Heart";

function App() {
  const [loading, setLoading] = useState(true);
    const [nav, setNav] = useState(false);
    const [animationState, setAnimationstate] = useState("true");
    useEffect(() => {
        setTimeout(() => {
            setAnimationstate("false");
        }, 8000);
    }, []);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  return loading?<Heart/>: (
      <I18nextProvider i18n={i18n}>
          <BrowserRouter>
              <AppRouter nav={nav} setNav={setNav} animationState={animationState}  />
          </BrowserRouter>
      </I18nextProvider>
      )

}
export default App;
