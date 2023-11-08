import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function PageFilm() {
  const { api } = useApi();
  const [thisMoovie, setThisMoovie] = useState();
  const { moovieId } = useParams();
  useEffect(() => {
    setThisMoovie(api.find((moovie) => moovie.title === moovieId));
  }, [api]);

  return (
    <main id="pageFilm">
      <div id="img-film-container">
        <img
          id="img-film"
          src={thisMoovie?.image}
          alt="img du film, 16rem x 16rem"
        />
      </div>
      <h2 id="movie-title-page">
        {thisMoovie?.original_title_romanised} <br />
        {thisMoovie?.original_title}
      </h2>
      <div className="synopsis-infos">
        {thisMoovie?.description}
        <div id="more-infos">
          <h4>Director: {thisMoovie?.director}</h4>
          <h5>Producer: {thisMoovie?.producer}</h5>
          <h6>Characters:</h6>
          <p className="characters">Biloute</p>
        </div>
      </div>
      <div id="trailer-container">
        <img
          id="img-trailer"
          src={thisMoovie?.movie_banner}
          alt="trailer, 16rem x 16rem"
        />
      </div>
    </main>
  );
}

export default PageFilm;
