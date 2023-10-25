import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import MoovieCard from "./components/MoovieCard";
import FilmOfDay from "./components/FilmOfDay";

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

        <MoovieCard api={api} key={api.id} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
