import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FilmOfDay from "./components/FilmOfDay";

function App() {
  return (
    <div>
      <NavBar />
      <FilmOfDay/>
      <Footer />
    </div>
  );
}

export default App;
