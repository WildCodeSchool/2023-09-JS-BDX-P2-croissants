import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalApp from "./GlobalApp";
import App from "./App";
import About from "./pages/About";
import Quizz from "./pages/Quizz";
import PageFilm from "./pages/PageFilms";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  {
    element: <GlobalApp />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
        loader: async () => {
          const { data } = await axios.get(`http://localhost:3000/`);
          return { list: data[0].history };
        },
      },
      {
        path: "/quizz",
        element: <Quizz />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/thisMovie/:movieId",
        element: <PageFilm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
