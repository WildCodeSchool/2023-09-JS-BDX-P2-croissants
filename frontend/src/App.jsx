import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilmOfDay from "./components/FilmOfDay";
import MoovieCard from "./components/MoovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios.get("https://ghibliapi.vercel.app/films").then(({ data }) => {
      setApi(data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <FilmOfDay />

      <MoovieCard api={api} key={api.id} />

      <Footer />
    </div>
  );
}

export default App;
