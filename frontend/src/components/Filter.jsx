import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import DateYearPicker from "./DateYearPicker";
import StarPicker from "./StarPicker";

function Filter({ setFilteredMovies, allMovies, searchTerms }) {
  const [directors, setDirectors] = useState({
    "Hayao Miyazaki": false,
    "Isao Takahata": false,
    "Yoshifumi Kondō": false,
    "Hiroyuki Morita": false,
    "Gorō Miyazaki": false,
    "Hiromasa Yonebayashi": false,
    "Michaël Dudok de Wit": false,
  });

  // Gestionnaire pour les changements des cases à cocher
  const handleCheckboxChange = (event) => {
    // Extraire la valeur et l'état de la case à cocher de l'événement
    const { value, checked } = event.target;

    // Mettre à jour l'état des réalisateurs en fonction de la case à cocher modifiée
    setDirectors((prevDirectors) => ({
      ...prevDirectors, // Prendre l'état actuel des réalisateurs
      [value]: checked, // Mettre à jour la valeur pour le réalisateur correspondant
    }));
  };

  // Effet pour récupérer des films basés sur les réalisateurs sélectionnés
  useEffect(() => {
    // Obtenir une liste des réalisateurs sélectionnés
    const selectedDirectors = Object.keys(directors).filter(
      (director) => directors[director]
    );
    // Si aucun réalisateur n'est sélectionné
    if (selectedDirectors.length === 0) {
      setFilteredMovies(allMovies); // Afficher tous les films
    } else {
      // Construire la chaîne de requête basée sur les réalisateurs sélectionnés
      const queryParams = selectedDirectors
        .map((director) => `director=${director}`)
        .join("&");

      // Faire une demande API avec les paramètres construits pour obtenir les films correspondants
      axios
        .get(`https://ghibliapi.vercel.app/films/?${queryParams}`)
        .then((response) => {
          const movies = response.data; // Extraire les films de la réponse
          setFilteredMovies(movies); // Mettre à jour l'état des films filtrés avec les films obtenus
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des films:", error);
        });
    }
  }, [directors, allMovies]); // Exécuter l'effet chaque fois que 'directors' ou 'allMovies' change

  useEffect(() => {
    // Filtrer les films lorsque le terme de recherche change
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerms]);

  Filter.propTypes = {
    setFilteredMovies: PropTypes.func.isRequired,
    allMovies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        rt_score: PropTypes.string.isRequired,
        people: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        species: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
    ),
    searchTerms: PropTypes.string.isRequired,
  };

  Filter.defaultProps = {
    allMovies: [],
  };

  return (
    <div className="container-filter">
      <div className="fil-title">
        <h2>Filters</h2>
      </div>
      <div className="filter-title">
        <div className="filter-range">
          <DateYearPicker />

          <div className="filter-star">
            <StarPicker />
          </div>
        </div>
        <div className="filter-director">
          <form>
            <div className="hayao">
              <label htmlFor="hayao">Hayao Miyazaki</label>
              <input
                type="checkbox"
                id="hayao"
                name="Hayao Miyazaki"
                value="Hayao Miyazaki"
                checked={directors.hayao}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="isao">
              <label htmlFor="isao">Isao Takahata</label>
              <input
                type="checkbox"
                id="isao"
                name="Isao Takahata"
                value="Isao Takahata"
                checked={directors.isao}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="yoshifumi">
              <label htmlFor="yoshifumi">Yoshifumi Kondō</label>
              <input
                type="checkbox"
                id="yoshifumi"
                name="Yoshifumi Kondō"
                value="Yoshifumi Kondō"
                checked={directors.yoshifumi}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="hiroyuki">
              <label htmlFor="hiroyuki">Hiroyuki Morita</label>
              <input
                type="checkbox"
                id="hiroyuki"
                name="Hiroyuki Morita"
                value="Hiroyuki Morita"
                checked={directors.hiroyuki}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="goro">
              <label htmlFor="checkbox5">Gorō Miyazaki</label>
              <input
                type="checkbox"
                id="goro"
                name="Gorō Miyazaki"
                value="Gorō Miyazaki"
                checked={directors.goro}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="hiromasa">
              <label htmlFor="checkbox6">Hiromasa Yonebayashi</label>
              <input
                type="checkbox"
                id="hiromasa"
                name="Hiromasa Yonebayashi"
                value="Hiromasa Yonebayashi"
                checked={directors.hiromasa}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="michael">
              <label htmlFor="michael">Michaël Dudok de Wit</label>
              <input
                type="checkbox"
                id="michael"
                name="Michaël Dudok de Wit"
                value="Michaël Dudok de Wit"
                checked={directors.michael}
                onChange={handleCheckboxChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
