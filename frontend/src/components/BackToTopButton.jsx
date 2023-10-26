import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button className="fleche-top" onClick={scrollUp}>
          <img
            className="img-fleche-top"
            src="../src/assets/fleche-vers-le-haut-sur-un-fond-de-cercle-noir.png"
            alt="Fleche-vers-le-haut"
          />
        </button>
      )}
    </div>
  );
}
export default BackToTopButton;
