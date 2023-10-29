import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FilterContext } from "../context/FilterContext";

function MoovieCard({ api }) {
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
            // On récupère les réalisateurs sélectionnés
            (director) => directors[director]
          );
          return (
            selectedDirectors.length === 0 || // On filtre les films par rapport aux réalisateurs
            selectedDirectors.includes(moovie.director)
          );
        })
    );
  }, [searchTerm, selectedStar, selectedYears, directors]);

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

MoovieCard.propTypes = {
  api: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      producer: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      rt_score: PropTypes.string.isRequired,
      people: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      species: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoovieCard;
