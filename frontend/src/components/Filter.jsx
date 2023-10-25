import React from "react";
import DateYearPicker from "./DateYearPicker";
import StarPicker from "./StarPicker";

function Filter() {
  return (
    <div className="container-filter">
      <div className="fil-title">
        <h2>Filters</h2>
      </div>
      <div className="filter-title">
        <div className="filter-range">
          <DateYearPicker />

          <div className="filter-star">
            <StarPicker />
          </div>
        </div>
        <div className="filter-director">
          <form>
            <div className="hayao">
              <label htmlFor="checkbox1">Hayao Miyazaki</label>
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="value1"
              />
            </div>

            <div className="isao">
              <label htmlFor="checkbox2">Isao Takahata</label>
              <input
                type="checkbox"
                id="checkbox2"
                name="checkbox2"
                value="value2"
              />
            </div>

            <div className="yoshifumi">
              <label htmlFor="checkbox3">Yoshifumi Kondō</label>
              <input
                type="checkbox"
                id="checkbox3"
                name="checkbox3"
                value="value3"
              />
            </div>

            <div className="hiroyuki">
              <label htmlFor="checkbox4">Hiroyuki Morita</label>
              <input
                type="checkbox"
                id="checkbox4"
                name="checkbox4"
                value="value4"
              />
            </div>

            <div className="goro">
              <label htmlFor="checkbox5">Gorō Miyazaki</label>
              <input
                type="checkbox"
                id="checkbox5"
                name="checkbox5"
                value="value5"
              />
            </div>

            <div className="hiromasa">
              <label htmlFor="checkbox6">Hiromasa Yonebayashi</label>
              <input
                type="checkbox"
                id="checkbox6"
                name="checkbox6"
                value="value6"
              />
            </div>

            <div className="michael">
              <label htmlFor="checkbox7">Michaël Dudok de Wit</label>
              <input
                type="checkbox"
                id="checkbox7"
                name="checkbox7"
                value="value7"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
