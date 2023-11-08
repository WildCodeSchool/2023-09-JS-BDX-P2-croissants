import { useEffect, useState, useRef, useContext } from "react";
import "./Styles/index.scss";
import NavBar from "./components/NavBar";
import MoovieCard from "./components/MoovieCard";
import Filter from "./components/Filter";
import FilmOfDay from "./components/FilmOfDay";
import BackToTopButton from "./components/BackToTopButton";
import FilterContextProvider, { FilterContext } from "./context/FilterContext";

import SkyAnimation from "./components/SkyAnimation";

function App() {
  const { searchTerm, setSearchTerm } = useContext(FilterContext); // La recherche
  const [isPlaying, setIsPlaying] = useState(false); // Le son
  const audioRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // Parallax est dangereux
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

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <FilterContextProvider>
      <div>
        <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <div className="global-container">
          "
          <button
            className="button-son"
            type="button"
            onClick={togglePlay}
            aria-pressed={isPlaying}
            title="Contrôler le son"
          >
            <img
              className="img-son"
              src={
                isPlaying
                  ? "src/assets/volume-up.svg"
                  : "src/assets/volume-mute.svg"
              }
              alt={isPlaying ? "Désactiver le son" : "Activer le son"}
            />
          </button>
          <FilmOfDay />
          <Filter />
          <MoovieCard />
          <SkyAnimation />
          <audio ref={audioRef} autoPlay>
            <track kind="captions" />
            <source src="src/assets/son.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <BackToTopButton />
      </div>
    </FilterContextProvider>
  );
}

export default App;
