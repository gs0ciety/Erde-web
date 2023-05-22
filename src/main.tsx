import Erde from "./Components/App/Erde";
import "./main.css";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(<Erde />);
