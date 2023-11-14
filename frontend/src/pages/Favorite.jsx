import { useApi } from "../context/ApiContext";

export default function Favorite() {
  const { api, favorites } = useApi();

  return (
    <div className="movie-container favorite">
      {api
        .filter((movie) => favorites.get(movie.title))
        .map((movie) => (
          <div className="movie-card">
            <img className="movie-img" src={movie.image} alt={movie.title} />
            <h3 className="movie-h3">{movie.title}</h3>
            <p>{movie.release_date}</p>
            <div>⭐ {movie.rt_score} / 100</div>
          </div>
        ))}
    </div>
  );
}
