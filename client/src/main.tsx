import { createRoot } from "react-dom/client";
import App from "./App";
// Self-hosted Montserrat (served from /assets, no Google Fonts request)
import "./fonts.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);