import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store.ts";

const root = createRoot(document.getElementById("root")!);

const render = () => {
  root.render(
    <StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </StrictMode>
  );
};

render();
store.subscribe(render);