import PropTypes from "prop-types";

function MoovieCard({ movies }) {
  return (
    <div className="moovie-container">
      {movies.map((moovie) => (
        <div key={moovie.id} className="moovie-div">
          <img className="moovie-img" src={moovie.image} alt={moovie.title} />
          <h3 className="moovie-h3">{moovie.title}</h3>
          <p>{moovie.release_date}</p>
          <div>⭐ {moovie.rt_score}</div>
        </div>
      ))}
    </div>
  );
}

MoovieCard.propTypes = {
  movies: PropTypes.arrayOf(
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
  ),
};

MoovieCard.defaultProps = {
  movies: [],
};

export default MoovieCard;
