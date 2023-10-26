import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilmOfDay from "./components/FilmOfDay";
import MoovieCard from "./components/MoovieCard";
import Filter from "./components/Filter";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/`)
      .then((response) => {
        const movies = response.data;
        setAllMovies(movies);
        setFilteredMovies(movies);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des films:", error);
      });
  }, []);

  useEffect(() => {
    // Filtrer les films lorsque le terme de recherche change
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, allMovies]);

  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="global-container">
        <FilmOfDay />
        <Filter
          setFilteredMovies={setFilteredMovies}
          allMovies={allMovies}
          searchTerms={searchTerm}
        />
        <MoovieCard movies={filteredMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
