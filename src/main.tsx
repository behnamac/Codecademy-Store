import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App state={store.getState()} dispatch={store.dispatch} />
  </StrictMode>
);
