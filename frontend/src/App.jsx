import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/index.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MoovieCard from "./components/MoovieCard";
import Filter from "./components/Filter";
import FilmOfDay from "./components/FilmOfDay";
import BackToTopButton from "./components/BackToTopButton";
import FilterContextProvider from "./context/FilterContext";
import SkyAnimation from "./components/SkyAnimation";

function App() {
  const [api, setApi] = useState([]); // La liste des films
  const [searchTerm, setSearchTerm] = useState(""); // La recherche

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films`)
      .then(({ data }) => {
        setApi(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des films:", error);
      });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // Parallax
      window.requestAnimationFrame(() => {
        const scrollToTop = document.scrollingElement.scrollTop;
        const target = document.body;
        const xvalue = "center";
        const factor = 0.2;
        const yvalue = scrollToTop * factor;
        target.style.backgroundPosition = `${xvalue} -${yvalue}px`;
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <FilterContextProvider>
      <div>
        <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <div className="global-container">
          <FilmOfDay />
          <Filter />
          <MoovieCard api={api} />
          <SkyAnimation />
          <audio controls autoPlay>
            <track kind="captions" />
            <source src="src/assets/son.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </FilterContextProvider>
  );
}

export default App;
