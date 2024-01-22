import React from "react";
import nuage1 from "../assets/nous/nuage1.png";
import nuage2 from "../assets/nous/nuage2.png";
import nuage4 from "../assets/nous/nuage4.png";

function SkyAnimation() {
  return (
    <div className="sky">
      <img src={nuage1} alt="Sprite 1" className="sprite sprite1" />
      <img src={nuage2} alt="Sprite 2" className="sprite sprite2" />
      <img src={nuage4} alt="Sprite 3" className="sprite sprite3" />
      <img src={nuage4} alt="Sprite 4" className="sprite sprite4" />
      <img src={nuage1} alt="Sprite 5" className="sprite sprite5" />
      <img
        src={nuage1}
        alt="Sprite diagonal 1"
        className="sprite dsprite dsprite1"
      />
      <img
        src={nuage2}
        alt="Sprite diagonal 2"
        className="sprite dsprite dsprite2"
      />
      <img
        src={nuage2}
        alt="Sprite diagonal 3"
        className="sprite dsprite dsprite3"
      />
      <img
        src={nuage4}
        alt="Sprite diagonal 4"
        className="sprite dsprite dsprite4"
      />
    </div>
  );
}

export default SkyAnimation;
