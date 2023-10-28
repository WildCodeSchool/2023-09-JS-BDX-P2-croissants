import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import "nouislider/dist/nouislider.css";
import "../Styles/components/_slider.scss";

function DateYearPicker() {
  const sliderRef = useRef(null);
  const [selectedYears, setSelectedYears] = useState([1986, 2021]);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = noUiSlider.create(sliderRef.current, {
        start: selectedYears,
        range: { min: 1986, max: 2021 },
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
        setSelectedYears(parsedValues);
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
      <div ref={sliderRef} />
      <div className="title from-year">
        Selected Years: {selectedYears[0]} - {selectedYears[1]}
      </div>
    </div>
  );
}

export default DateYearPicker;
