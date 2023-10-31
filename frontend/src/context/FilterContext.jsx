import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

// Crée un contexte React qui sera utilisé pour partager les données de filtre entre les composants.
export const FilterContext = createContext({
  // C'est la valeur par défaut du contexte
  searchTerm: "",
  setSearchTerm: () => {},
  selectedYears: [1986, 2021],
  setSelectedYears: () => {},
  selectedStar: [30, 100],
  setSelectedStar: () => {},
  directors: {
    "Hayao Miyazaki": false,
    "Isao Takahata": false,
    "Yoshifumi Kondō": false,
    "Hiroyuki Morita": false,
    "Gorō Miyazaki": false,
    "Hiromasa Yonebayashi": false,
    "Michaël Dudok de Wit": false,
  },
  setDirectors: () => {},
});

function FilterContextProvider({ children }) {
  // Ceci est le fournisseur qui enveloppera l'application
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche
  const [selectedYears, setSelectedYears] = useState([1986, 2021]); // État pour les années sélectionnées
  const [selectedStar, setSelectedStar] = useState([30, 100]); // État pour l'évaluation sélectionnée
  const [directors, setDirectors] = useState({
    // État pour les réalisateurs sélectionnés
    "Hayao Miyazaki": false,
    "Isao Takahata": false,
    "Yoshifumi Kondō": false,
    "Hiroyuki Morita": false,
    "Gorō Miyazaki": false,
    "Hiromasa Yonebayashi": false,
    "Michaël Dudok de Wit": false,
  });

  // Utilise useMemo pour optimiser les performances en évitant de recréer le contexte à chaque rendu.
  const context = useMemo(() => {
    // C'est le contexte qui sera utilisé dans ce composant
    return {
      searchTerm,
      setSearchTerm,
      selectedYears,
      setSelectedYears,
      selectedStar,
      setSelectedStar,
      directors,
      setDirectors,
    };
  }, [searchTerm, selectedYears, selectedStar, directors]);

  return (
    // Fournit le contexte aux composants enfants à l'intérieur de ce fournisseur
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
}

// Définit les types de propriétés (props) attendues par le composant FilterContextProvider.
FilterContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Attend un enfant React
};

export default FilterContextProvider;
