import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";
import { CategoryAndLevelProvider } from "@/context/CategoryAndLevelContext";
import { Router } from "../Router/Router";
import { useUser } from "../context/userContext";

const RouterComponent = BrowserRouter;

export function App() {
  const { token } = useUser();
  window.console.log("App log");
  return (
    <StrictMode>
      <RouterComponent>
        <CategoryAndLevelProvider>
          <Providers>
            <Router />
          </Providers>
        </CategoryAndLevelProvider>
      </RouterComponent>
    </StrictMode>
  );
}
