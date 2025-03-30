import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar.tsx";
import Contact from "./contact/contact.tsx";
import NotFound from "./notFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <App /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>
);
