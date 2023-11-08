import { Outlet } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function GlobalApp() {
  return (
    <ApiProvider>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ApiProvider>
  );
}
export default GlobalApp;
