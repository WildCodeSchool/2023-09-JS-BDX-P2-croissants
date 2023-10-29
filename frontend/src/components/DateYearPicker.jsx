import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import "nouislider/dist/nouislider.css";
import "../Styles/slider.scss";

function DateYearPicker({ setFilteredMovies, allMovies }) {
  const sliderRef = useRef(null);
  const [selectedYears, setSelectedYears] = useState([1986, 2021]);

  const handleDateRangeChange = (year) => {
    // Filtrer les films en fonction de la plage de dates sélectionnée
    const filteredMovies = allMovies.filter((movie) => {
      const releaseYear = parseInt(movie.release_date, 10);
      return releaseYear >= year[0] && releaseYear <= year[1];
    });

    // Mettre à jour les films filtrés dans le composant parent
    setFilteredMovies(filteredMovies);
  };

  useEffect(() => {
    // Mettre à jour les films filtrés lorsque la plage de dates sélectionnée change
    handleDateRangeChange(selectedYears);
  }, [selectedYears, allMovies]);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: selectedYears,
        range: { min: 1986, max: 2021 },
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
        setSelectedYears(parsedValues);
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
      <div className="title from-year">
        Selected Years: {selectedYears[0]} - {selectedYears[1]}
      </div>
    </div>
  );
}

DateYearPicker.propTypes = {
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

export default DateYearPicker;
