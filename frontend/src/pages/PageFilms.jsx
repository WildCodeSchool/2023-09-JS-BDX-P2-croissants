import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function PageFilm() {
  const { api } = useApi();
  const [thisMovie, setThisMovie] = useState();
  const { movieId } = useParams();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setThisMovie(api.find((movie) => movie.title === movieId));
  }, [api]);

  useEffect(() => {
    if (thisMovie) {
      const fetchNames = async () => {
        const names = await Promise.all(
          thisMovie?.people.map((url) =>
            fetch(url).then((response) =>
              response.json().then((data) => data.name)
            )
          )
        );
        setCharacters(names);
      };
      fetchNames();
    }
  }, [thisMovie]);

  useEffect(() => {}, [characters]);

  return (
    <main id="pageFilm">
      <div className="img-desc">
        <div id="img-film-container">
          <img
            id="img-film"
            src={thisMovie?.image}
            alt="img du film, 16rem x 16rem"
          />
        </div>

        <div className="synopsis-infos">
          <h2 id="movie-title-page">
            {thisMovie?.original_title_romanised} <br />
            {thisMovie?.original_title}
          </h2>
          {thisMovie?.description}
          <div id="more-infos">
            <h4>Director: {thisMovie?.director}</h4>
            <h5>Producer: {thisMovie?.producer}</h5>
            <h6>
              Characters:
              {characters.map((character) => (
                <p className="characters">{character}</p>
              ))}
            </h6>
          </div>
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
