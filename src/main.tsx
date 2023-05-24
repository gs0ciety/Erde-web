import { Provider } from "react-redux";
import Erde from "./Components/App/Erde";
import "./main.css";
import { createRoot } from "react-dom/client";
import { store } from "./Store/Store";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <Erde />
  </Provider>
);
