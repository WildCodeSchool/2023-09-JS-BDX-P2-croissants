import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/App.scss";
import "./Styles/PageFilms.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MoovieCard from "./components/MoovieCard";
import Filter from "./components/Filter";
import FilmOfDay from "./components/FilmOfDay";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const [api, setApi] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films`)
      .then(({ data }) => {
        setApi(data);
        setFilteredMovies(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des films:", error);
      });
  }, []);

  useEffect(() => {
    // Filtrer les films lorsque le terme de recherche change
    const filtered = api.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, api]);

  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="global-container">
        <FilmOfDay />
        <Filter
          setFilteredMovies={setFilteredMovies}
          allMovies={api}
          searchTerms={searchTerm}
        />
        <MoovieCard api={filteredMovies} />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
