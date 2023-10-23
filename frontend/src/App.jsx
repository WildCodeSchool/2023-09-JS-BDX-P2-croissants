import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageFilm from "./components/PageFilm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [api, setApi] = useState();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <NavBar />
      <PageFilm />
      <Footer />
    </div>
  );
}

export default App;
