import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RoutingProvider } from "./components/bootstrap/RoutingProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <RoutingProvider />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
