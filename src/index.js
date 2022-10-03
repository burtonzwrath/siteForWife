
import ReactDOM from "react-dom/client";
import React, {Suspense} from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Suspense fallback={(<div>Loading~~~</div>)}>
        <App />
    </Suspense>
);

reportWebVitals();
