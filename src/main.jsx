// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SharContext from "./pages/authentication/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <SharContext>
        <App />
      </SharContext>
    </BrowserRouter>
  // </StrictMode>
);
