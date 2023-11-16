import React, { useEffect, useRef, useContext, useState } from "react";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import "nouislider/dist/nouislider.css";
import { FilterContext } from "../context/FilterContext";
import "../Styles/components/_slider.scss";

function StarPicker() {
  const sliderRef = useRef(null);
  const { selectedStar, setSelectedStar } = useContext(FilterContext);
  const [localStar, setLocalStart] = useState(selectedStar); // Local state for slider values

  // Initialize the slider
  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: localStar,
        range: { min: 30, max: 100 },
        connect: true,
        tooltips: [true, true],
        format: wNumb({ decimals: 0 }),
      });

      slider.on("start", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          const newTooltip = tooltip;
          newTooltip.style.display = "block";
        });
      });

      slider.on("end", () => {
        const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
        tooltips.forEach((tooltip) => {
          const newTooltip = tooltip;
          newTooltip.style.display = "none";
        });
      });

      slider.on("update", (values) => {
        setLocalStart(values.map((value) => parseInt(value, 10)));
      });

      slider.on("change", (values) => {
        const newValues = values.map((value) => parseInt(value, 10));
        setSelectedStar(newValues);
      });

      const tooltips = sliderRef.current.querySelectorAll(".noUi-tooltip");
      tooltips.forEach((tooltip) => {
        const newTooltip = tooltip;
        newTooltip.style.display = "none";
      });

      return () => {
        if (sliderRef.current && sliderRef.current.noUiSlider) {
          sliderRef.current.noUiSlider.destroy();
        }
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.noUiSlider) {
      sliderRef.current.noUiSlider.set(selectedStar);
    }
  }, [selectedStar]);

  return (
    <div className="ui-slider">
      <div ref={sliderRef} />
      <div className="title from-year">
        Selected Stars: {localStar[0]} - {localStar[1]}
      </div>
    </div>
  );
}

export default StarPicker;
