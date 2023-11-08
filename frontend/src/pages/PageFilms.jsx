import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function PageFilm() {
  const { api } = useApi();
  const [thisMovie, setThisMovie] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    setThisMovie(api.find((movie) => movie.title === movieId));
  }, [api]);

  return (
    <main id="pageFilm">
      <div id="img-film-container">
        <img
          id="img-film"
          src={thisMovie?.image}
          alt="img du film, 16rem x 16rem"
        />
      </div>
      <h2 id="movie-title-page">
        {thisMovie?.original_title_romanised} <br />
        {thisMovie?.original_title}
      </h2>
      <div className="synopsis-infos">
        {thisMovie?.description}
        <div id="more-infos">
          <h4>Director: {thisMovie?.director}</h4>
          <h5>Producer: {thisMovie?.producer}</h5>
          <h6>Characters:</h6>
          <p className="characters">Biloute</p>
        </div>
      </div>
      <div id="trailer-container">
        <img
          id="img-trailer"
          src={thisMovie?.movie_banner}
          alt="trailer, 16rem x 16rem"
        />
      </div>
    </main>
  );
}

export default PageFilm;
