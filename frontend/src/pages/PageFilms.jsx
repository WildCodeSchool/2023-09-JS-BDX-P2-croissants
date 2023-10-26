import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PageFilm() {
  const [api, setApi] = useState([]);
  const [thisMoovie, setThisMoovie] = useState();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then(({ data }) => {
        setApi(data);
      })
      .catch(() => {
        alert("erreur");
      });
  }, []);

  const { moovieId } = useParams();
  useEffect(() => {
    setThisMoovie(api.find((moovie) => moovie.title === moovieId));
  }, [api]);

  console.log(thisMoovie);
  console.log({ moovieId });

  return (
    <main id="pageFilm">
      <div id="img-film-container">
        <img
          id="img-film"
          src={thisMoovie?.image}
          alt="img du film, 16rem x 16rem"
        />
      </div>
      <h2 id="movie-title-page">{thisMoovie?.title}</h2>
      <div id="synopsis-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
        luctus fermentum. Praesent non dolor in tellus consectetur sagittis.
        Morbi id lectus sed tellus imperdiet elementum vel venenatis nunc.
        Praesent efficitur non ipsum ac bibendum. In arcu ex, feugiat nec velit
        nec, mollis accumsan ante. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Etiam consequat velit dapibus feugiat cursus
      </div>
      <div id="trailer-container">
        <img id="img-trailer" src="" alt="trailer, 16rem x 16rem" />
      </div>
    </main>
  );
}
export default PageFilm;
