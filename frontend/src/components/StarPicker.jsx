import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import "nouislider/dist/nouislider.css";

function StarPicker() {
  const sliderRef = useRef(null);
  const [selectedStar, setSelectedStar] = useState([30, 100]);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: selectedStar,
        range: { min: 30, max: 100 },
        connect: true,
        tooltips: [true, true],
        format: wNumb({
          decimals: 0,
        }),
      });

      slider.on("start", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          tooltip.style.display = "block";
        });
      });

      slider.on("end", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          tooltip.style.display = "none";
        });
      });

      slider.on("update", (values) => {
        const parsedValues = values.map((value) => parseInt(value, 10));
        setSelectedStar(parsedValues);
      });

      const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
      tooltips.forEach((tooltip) => {
        tooltip.style.display = "none";
      });
    }

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className="ui-slider">
      <div ref={sliderRef}></div>
      <div className="title">
        Selected Stars: {selectedStar[0]} - {selectedStar[1]}
      </div>
    </div>
  );
}

export default StarPicker;
