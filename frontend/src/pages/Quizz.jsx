import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Quizz() {
  const theQuizz = [
    {
      question: "",
      answers: [
        {
          answer: "",
          valide: true,
        },
        {
          answer: "",
          valide: false,
        },
        {
          answer: "",
          valide: false,
        },
        {
          answer: "",
          valide: false,
        },
      ],
    },
  ];
  console.error(theQuizz);

  return (
    <div>
      <div className="quizz-container">
        <NavBar />
        <div className="quizz-div-global">
          <h1>THIS IS THE QUIZZ</h1>
          <h2>Question</h2>
          <div className="quizz-div">
            <div>zaeazreaz</div>
            <div>dzadsqdfq</div>
            <div>ezaes</div>
            <div>ezaeazd</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quizz;
