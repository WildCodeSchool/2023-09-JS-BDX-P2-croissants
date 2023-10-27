import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
        console.error("erreur");
      });
  }, []);

  const { moovieId } = useParams();
  useEffect(() => {
    setThisMoovie(api.find((moovie) => moovie.title === moovieId));
  }, [api]);

  return (
    <main id="pageFilm">
<<<<<<< HEAD
=======
      <NavBar />
>>>>>>> c697f4c676f1f6acc0583a5e673aac8c6910ec24
      <div id="img-film-container">
        <img
          id="img-film"
          src={thisMoovie?.image}
          alt="img du film, 16rem x 16rem"
        />
      </div>
<<<<<<< HEAD
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

=======
      <h2 id="movie-title-page">
        {thisMoovie?.original_title_romanised} <br />
        {thisMoovie?.original_title}
      </h2>
      <div id="synopsis-container">{thisMoovie?.description}</div>
      <div id="more-infos">
        <h4>Director: {thisMoovie?.director}</h4>
        <h5>Producer: {thisMoovie?.producer}</h5>
      </div>
      <div id="trailer-container">
        <img
          id="img-trailer"
          src={thisMoovie?.movie_banner}
          alt="trailer, 16rem x 16rem"
        />
      </div>
      <Footer />
    </main>
  );
}
>>>>>>> c697f4c676f1f6acc0583a5e673aac8c6910ec24
export default PageFilm;
