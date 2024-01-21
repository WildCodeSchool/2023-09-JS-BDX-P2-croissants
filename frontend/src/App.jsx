import { useEffect, useState, useRef } from "react";
import "./Styles/index.scss";
import MovieCard from "./components/MovieCard";
import Filter from "./components/Filter";
import FilmOfDay from "./components/FilmOfDay";
import BackToTopButton from "./components/BackToTopButton";
import mute from "./assets/nous/play.png";
import pause from "./assets/nous/pause.png";
import son from "./assets/nous/son.mp3";

function App() {
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
    <div>
      <div className="global-container">
        <button
          className="button-son"
          type="button"
          onClick={togglePlay}
          aria-pressed={isPlaying}
          title="Contrôler le son"
        >
          <img
            className="img-son"
            src={isPlaying ? mute : pause}
            alt={isPlaying ? "Désactiver le son" : "Activer le son"}
          />
        </button>
        <FilmOfDay />
        <Filter />
        <MovieCard />
        <audio ref={audioRef}>
          <track kind="captions" />
          <source src={son} type="audio/mpeg" />
        </audio>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
