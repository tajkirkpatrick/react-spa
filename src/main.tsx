import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";
import App from "@/App.tsx";
import Header from "@/shared/Header";
import Sidebar from "@/shared/Sidebar";
import Footer from "@/shared/Footer";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
