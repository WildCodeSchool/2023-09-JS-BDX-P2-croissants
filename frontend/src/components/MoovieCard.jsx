import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ApiContext";

import { FilterContext } from "../context/FilterContext";

function MoovieCard() {
  const { api } = useApi();
  const [selectedMoovie, setSelectedMoovie] = useState(api); // Les films triés par les filtres
  const { searchTerm, selectedYears, selectedStar, directors } =
    useContext(FilterContext); // This is the context that will be used in this component
  useEffect(() => {
    setSelectedMoovie(
      api
        .filter((moovie) => {
          return (
            searchTerm === "" ||
            moovie.title.toLowerCase().includes(searchTerm.toLowerCase()) // On filtre les films par rapport au titre
          );
        })
        .filter((moovie) => {
          return (
            moovie.release_date >= selectedYears[0] && // On filtre les films par rapport à la date de sortie
            moovie.release_date <= selectedYears[1]
          );
        })
        .filter((moovie) => {
          return (
            moovie.rt_score >= selectedStar[0] && // On filtre les films par rapport au score
            moovie.rt_score <= selectedStar[1]
          );
        })
        .filter((moovie) => {
          const selectedDirectors = Object.keys(directors).filter(
            // On récupère les réalisateurs sélectionnés
            (director) => directors[director]
          );
          return (
            selectedDirectors.length === 0 || // On filtre les films par rapport aux réalisateurs
            selectedDirectors.includes(moovie.director)
          );
        })
    );
  }, [searchTerm, selectedStar, selectedYears, directors, api]);

  return (
    <div className="moovie-container">
      {selectedMoovie.map((moovie) => (
        <Link
          key={moovie.id}
          className="moovie-div"
          to={`/thisMoovie/${moovie.title}`}
        >
          <img className="moovie-img" src={moovie.image} alt={moovie.title} />
          <h3 className="moovie-h3">{moovie.title}</h3>
          <p>{moovie.release_date}</p>
          <div>⭐ {moovie.rt_score} / 100</div>
        </Link>
      ))}
    </div>
  );
}

export default MoovieCard;
