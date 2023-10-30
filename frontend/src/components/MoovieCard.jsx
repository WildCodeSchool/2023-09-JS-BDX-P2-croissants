import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function MoovieCard({ api }) {
  const [rangeValue, setRangeValue] = useState(20);
  return (
    <div className="moovie-container">
      <div className="inputRange">
        <p> Filtre Nombre films</p>
        <span>{rangeValue}</span>
        <input
          id="input"
          type="range"
          min="0"
          max="22"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </div>
      <div className="api">
        {api.slice(0, rangeValue).map((moovie) => (
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
