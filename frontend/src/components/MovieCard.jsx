import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";

import { FilterContext } from "../context/FilterContext";

function MovieCard() {
  const { api } = useApi();
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

  return (
    <div className="movie-container">
      {selectedMovie.map((movie) => (
        <Link
          key={movie.id}
          className="movie-div"
          to={`/thisMovie/${movie.title}`}
        >
          <img className="movie-img" src={movie.image} alt={movie.title} />
          <h3 className="movie-h3">{movie.title}</h3>
          <p>{movie.release_date}</p>
          <div>⭐ {movie.rt_score} / 100</div>
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
