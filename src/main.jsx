import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { persistor, store } from "./assets/Store/Store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Source - https://stackoverflow.com/questions/56369444/how-can-i-dynamically-load-an-icon-using-its-snake-case-name-react-material-ui
// Posted by Roozbeh
// Retrieved 11/5/2025, License - CC BY-SA 4.0

import 'material-icons/iconfont/material-icons.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
