import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CountContextProvider } from "./contexts/CountContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </StrictMode>
);
