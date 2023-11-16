import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import DateYearPicker from "./DateYearPicker";
import StarPicker from "./StarPicker";

function Filter() {
  const { directors, setDirectors } = useContext(FilterContext); // This is the context that will be used in this component
  const { searchTerm } = useContext(FilterContext); // This is the context that will be used in this component

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

  return (
    <div className={searchTerm !== "" ? "invisible" : "container-filter"}>
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
