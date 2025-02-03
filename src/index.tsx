import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CountContextProvider } from "./contexts/CountContext.tsx";
import { routes } from "./routes.tsx";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountContextProvider>
      <RouterProvider router={router} />
    </CountContextProvider>
  </StrictMode>
);
