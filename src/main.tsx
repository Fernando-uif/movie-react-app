import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Booked } from "./pages/Booked.tsx";
import { HomeMovies } from "./pages/HomeMovies.tsx";
import { MoviePage } from "./pages/MoviePage.tsx";
import { SeriesPage } from "./pages/SeriesPage.tsx";

import App from "./App.tsx";

import "../src/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/home-movies",
    element: <HomeMovies />,
  },
  {
    path: "/movies",
    element: <MoviePage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/bookmark",
    element: <Booked />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
