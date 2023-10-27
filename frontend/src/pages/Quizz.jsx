import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../Styles/Quizz.scss";

function Quizz() {
  return (
    <div className="quizz-container">
      <NavBar />
      <div className="quizz-div-global">
        <h1>THIS IS THE QUIZZ</h1>
        <div className="quizz-div" style={{ display: "flex" }}>
          question
          <div>zaeazreaz</div>
          <div>dzadsqdfq</div>
          <div>ezaes</div>
          <div>ezaeazd</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Quizz;
