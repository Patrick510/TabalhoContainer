import { ThemeProvider } from "@/components/theme-provider"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
        <RouterProvider router={routes} />
        <Toaster />
      </StrictMode>
  </ThemeProvider>
);
