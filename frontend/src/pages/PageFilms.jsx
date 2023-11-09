import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import trailers from "../data/trailers";

function PageFilm() {
  const { api } = useApi();
  const [thisMovie, setThisMovie] = useState();
  const { movieId } = useParams();
  const [characters, setCharacters] = useState([]);
  const [currentTrailer, setCurrentTrailer] = useState([]);

  useEffect(() => {
    setThisMovie(api.find((movie) => movie.title === movieId));
  }, [api]);

  useEffect(() => {
    if (thisMovie) {
      const movieTrailer = trailers.find(
        (trailer) => trailer.id === thisMovie.id
      );
      setCurrentTrailer(movieTrailer);

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
          <div className="description">{thisMovie?.description}</div>
          <div id="more-infos">
            <h4>Director: {thisMovie?.director}</h4>
            <h5>Producer: {thisMovie?.producer}</h5>
            {characters[0] !== undefined && (
              <>
                <h6>Characters:</h6>
                {characters.map((character) => (
                  <p className="characters">{character}</p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div id="trailer-container">
        {currentTrailer ? (
          <iframe
            className="iframe"
            width="560"
            height="315"
            src={currentTrailer.source}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p>Pas de trailer disponible pour ce film.</p>
        )}
      </div>
    </main>
  );
}

export default PageFilm;
