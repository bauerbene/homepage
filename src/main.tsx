import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RoutingProvider } from "./components/bootstrap/RoutingProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutingProvider />
    </BrowserRouter>
  </StrictMode>
);
