import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext({
  // This is the default value of the context
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
  // This is the provider that will wrap the app
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYears, setSelectedYears] = useState([1986, 2021]);
  const [selectedStar, setSelectedStar] = useState([30, 100]);
  const [directors, setDirectors] = useState({
    "Hayao Miyazaki": false,
    "Isao Takahata": false,
    "Yoshifumi Kondō": false,
    "Hiroyuki Morita": false,
    "Gorō Miyazaki": false,
    "Hiromasa Yonebayashi": false,
    "Michaël Dudok de Wit": false,
  });

  const context = useMemo(() => {
    // This is the context that will be used in this component
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
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterContextProvider;
