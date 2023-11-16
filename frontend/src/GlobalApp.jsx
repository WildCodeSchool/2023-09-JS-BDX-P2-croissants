import { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilterContextProvider, { FilterContext } from "./context/FilterContext";
import { ApiProvider } from "./context/ApiContext";
import SkyAnimation from "./components/SkyAnimation";

function GlobalApp() {
  const { searchTerm, setSearchTerm } = useContext(FilterContext); // La recherche
  return (
    <ApiProvider>
      <FilterContextProvider>
        <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

        <main className="global-container">
          <Outlet />
          <SkyAnimation />
        </main>
        <Footer />
      </FilterContextProvider>
    </ApiProvider>
  );
}
export default GlobalApp;
