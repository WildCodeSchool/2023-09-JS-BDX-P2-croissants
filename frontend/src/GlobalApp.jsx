import { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilterContextProvider, { FilterContext } from "./context/FilterContext";
import { ApiProvider } from "./context/ApiContext";

function GlobalApp() {
  const { searchTerm, setSearchTerm } = useContext(FilterContext); // La recherche
  return (
    <ApiProvider>
      <FilterContextProvider>
        <NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

        <main className="global-container">
          <Outlet />
        </main>
        <Footer />
      </FilterContextProvider>
    </ApiProvider>
  );
}
export default GlobalApp;
