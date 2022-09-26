import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AppRouter from "./components/AppRouter";
import { useState } from "react";
import Heart from "./components/Heart";

function App() {
  const [loading, setLoading] = useState(true);
    const [nav, setNav] = useState(false);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  return loading?<Heart/>: (
      <BrowserRouter>
          <AppRouter nav={nav} setNav={setNav}  />
      </BrowserRouter>
      )

}
export default App;
