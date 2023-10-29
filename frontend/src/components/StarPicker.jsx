import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import "nouislider/dist/nouislider.css";

function StarPicker({ setFilteredMovies, allMovies }) {
  const sliderRef = useRef(null);
  const [selectedStar, setSelectedStar] = useState([30, 100]);

  const handleStarRangeChange = (star) => {
    // Filtrer les films en fonction de la plage de dates sélectionnée
    const filteredMovies = allMovies.filter((movie) => {
      const releaseStar = parseInt(movie.rt_score, 10);
      return releaseStar >= star[0] && releaseStar <= star[1];
    });

    // Mettre à jour les films filtrés dans le composant parent
    setFilteredMovies(filteredMovies);
  };

  useEffect(() => {
    // Mettre à jour les films filtrés lorsque la plage de dates sélectionnée change
    handleStarRangeChange(selectedStar);
  }, [selectedStar, allMovies]);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: selectedStar,
        range: { min: 30, max: 100 },
        connect: true,
        tooltips: [true, true],
        format: wNumb({
          decimals: 0,
        }),
      });

      slider.on("start", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          tooltip.style.display = "block";
        });
      });

      slider.on("end", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          tooltip.style.display = "none";
        });
      });

      slider.on("update", (values) => {
        const parsedValues = values.map((value) => parseInt(value, 10));
        setSelectedStar(parsedValues);
      });

      const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
      tooltips.forEach((tooltip) => {
        tooltip.style.display = "none";
      });
    }

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className="ui-slider">
      <div ref={sliderRef}></div>
      <div className="title">
        Selected Stars: {selectedStar[0]} - {selectedStar[1]}
      </div>
    </div>
  );
}

StarPicker.propTypes = {
  setFilteredMovies: PropTypes.func.isRequired,
  allMovies: PropTypes.arrayOf(
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

export default StarPicker;
