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
      <NavBar />
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
export default PageFilm;
