import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../src/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeMovies } from "./components/home/HomeMovies.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    ],
  },
  {
    path: "/home-movies",
    element: <HomeMovies />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
