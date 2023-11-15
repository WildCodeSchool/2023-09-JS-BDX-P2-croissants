import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import { FilterContext } from "../context/FilterContext";

function MovieCard() {
  const { api, toogleFavorite, favorites } = useApi();
  const [selectedMovie, setSelectedMovie] = useState(api); // Les films triés par les filtres
  const { searchTerm, selectedYears, selectedStar, directors } =
    useContext(FilterContext); // This is the context that will be used in this component
  useEffect(() => {
    setSelectedMovie(
      api
        .filter((movie) => {
          return (
            searchTerm === "" ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) // On filtre les films par rapport au titre
          );
        })
        .filter((movie) => {
          return (
            movie.release_date >= selectedYears[0] && // On filtre les films par rapport à la date de sortie
            movie.release_date <= selectedYears[1]
          );
        })
        .filter((movie) => {
          return (
            movie.rt_score >= selectedStar[0] && // On filtre les films par rapport au score
            movie.rt_score <= selectedStar[1]
          );
        })
        .filter((movie) => {
          const selectedDirectors = Object.keys(directors).filter(
            // On récupère les réalisateurs sélectionnés
            (director) => directors[director]
          );
          return (
            selectedDirectors.length === 0 || // On filtre les films par rapport aux réalisateurs
            selectedDirectors.includes(movie.director)
          );
        })
    );
  }, [searchTerm, selectedStar, selectedYears, directors, api]);

  const [reload, setReload] = useState(false);
  useEffect(() => {}, [reload]);
  const onLike = (name) => {
    toogleFavorite(name);
    setReload(!reload);
  };

  return (
    <div className="movie-container">
      {selectedMovie.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link className="movie-div" to={`/thisMovie/${movie.title}`}>
            <img className="movie-img" src={movie.image} alt={movie.title} />
            <h3 className="movie-h3">{movie.title}</h3>
          </Link>
          <p>Date de Sortie: {movie.release_date}</p>
          <div>⭐ {movie.rt_score} / 100</div>

          <button type="button" onClick={() => onLike(movie.title)}>
            {favorites.get(movie.title) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
