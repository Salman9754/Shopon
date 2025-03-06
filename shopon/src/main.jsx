import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/home";

createRoot(document.getElementById("root")).render(
  <>
   <Home />
  </>
);
