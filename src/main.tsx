import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar.tsx";
import Contact from "./contact/contact.tsx";
import NotFound from "./notFound.tsx";
import Projects from "./projects/projects.tsx";
import Login from "./Login.tsx";
import Verify from "./Verify.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <App /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/login", element: <Login /> },
      { path: "/verify", element: <Verify /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="mutedColorBg accentColor h-screen">
      <Navbar />
      <RouterProvider router={router} />
    </main>
  </StrictMode>
);
