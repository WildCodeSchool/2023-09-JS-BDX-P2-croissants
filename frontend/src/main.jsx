import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { About } from "./pages/About";
import PageFilm from "./pages/PageFilms";
import Quizz from "./pages/Quizz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/quizz",
    element: <Quizz />,
  },
  {
    path: "/thisMoovie/:moovieId",
    element: <PageFilm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
