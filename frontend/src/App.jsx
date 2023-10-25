import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilmOfDay from "./components/FilmOfDay";
import MoovieCard from "./components/MoovieCard";
import Filter from "./components/Filter";

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then(({ data }) => {
        setApi(data);
      })
      .catch(() => {
        alert("erreur");
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="global-container">
        <FilmOfDay />
        <Filter />
        <MoovieCard api={api} key={api.id} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
