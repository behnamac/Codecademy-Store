import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store.ts";

const root = createRoot(document.getElementById("root")!);

const render = () => {
  root.render(
    <StrictMode>
      <App state={{
        ...store.getState(),
        cart: Object.fromEntries(
          Object.entries(store.getState().cart).map(([key, value]) => [
            key,
            { quantity: value.quantity || 0, price: value.price },
          ])
        )
      }} dispatch={store.dispatch} />
    </StrictMode>
  );
};

render();
store.subscribe(render);