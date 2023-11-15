import { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";

export default function Favorite() {
  const { api, favorites, toogleFavorite } = useApi();

  const [reload, setReload] = useState(false);
  useEffect(() => {}, [reload]);
  const onLike = (name) => {
    toogleFavorite(name);
    setReload(!reload);
  };

  return (
    <div>
      <div className="title-favorite">
        <h1>FAVORITE</h1>
      </div>
      <div className="movie-container favorite">
        {api
          .filter((movie) => favorites.get(movie.title))
          .map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img className="movie-img" src={movie.image} alt={movie.title} />
              <h3 className="movie-h3">{movie.title}</h3>
              <p>Date de Sortie :{movie.release_date}</p>
              <div>⭐ {movie.rt_score} / 100</div>
              <button type="button" onClick={() => onLike(movie.title)}>
                {favorites.get(movie.title) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
