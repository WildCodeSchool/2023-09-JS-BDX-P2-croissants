import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../Styles/Quizz.scss";

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
  alert(theQuizz);

  return (
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
      <Footer />
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> c697f4c676f1f6acc0583a5e673aac8c6910ec24
export default Quizz;
