/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [api, setApi] = useState([]);
  const [favorites, setFavorites] = useState(new Map());

  async function toogleFavorite(name) {
    favorites.set(name, favorites.has(name) ? !favorites.get(name) : true); // fonction favorite

    setFavorites(favorites);
    setApi(api);
  }

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

  return (
    <ApiContext.Provider value={{ api, setApi, favorites, toogleFavorite }}>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApi = () => useContext(ApiContext);
