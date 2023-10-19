import Hamburger from "hamburger-react";
import { useState } from "react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <header>
        <nav>
          <div className="navLinks">
            <img src="src/assets/logo.png" alt="logo" />
            <ul className="display-none">
              <li>Accueil</li>
              <li>A propos</li>
              <li>Quizz</li>
            </ul>
          </div>
          <input placeholder="🔎 search" className="display-none"></input>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
