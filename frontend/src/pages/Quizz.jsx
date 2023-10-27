import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../Styles/Quizz.scss";

function Quizz() {
  const theQuizz = [
    {
      question: "De quel film provient le logo du studio ?",
      answers: [
        {
          answer: "Le voyage de Chihiro",
          valide: false,
        },
        {
          answer: "Mon voisin Totoro",
          valide: true,
        },
        {
          answer: "Pompoko",
          valide: false,
        },
        {
          answer: "Kiki la petite sorcière",
          valide: false,
        },
      ],
    },
    {
      question:
        "Quel est le nom de l'héroïne principale de Laputa, le château dans le ciel ?",
      answers: [
        {
          answer: "Shiina",
          valide: false,
        },
        {
          answer: "Chena",
          valide: false,
        },
        {
          answer: "Sheeta",
          valide: true,
        },
        {
          answer: "Leta",
          valide: false,
        },
      ],
    },
    {
      question: "Quel est le nom du compositeur fétiche du studio Ghibli ?",
      answers: [
        {
          answer: "Masashi Kishimoto",
          valide: false,
        },
        {
          answer: "Yoko Kano",
          valide: false,
        },
        {
          answer: "Isao Takahata",
          valide: false,
        },
        {
          answer: "Joe Hisaishi",
          valide: true,
        },
      ],
    },
    {
      question:
        "Quel animé a été le plus gros succès du studio à ce jour, avec plus de 23 millions de visiteurs au Japon ?",
      answers: [
        {
          answer: "Le voyage de Chihiro",
          valide: true,
        },
        {
          answer: "Princesse Mononoke",
          valide: false,
        },
        {
          answer: "Nausicaä",
          valide: false,
        },
        {
          answer: "Omoide Poroporo",
          valide: false,
        },
      ],
    },
    {
      question:
        "Quel métier occupera Kiki lorsqu'elle décide de s'installer dans sa nouvelle ville ?",
      answers: [
        {
          answer: "Boulangère",
          valide: false,
        },
        {
          answer: "Peintre",
          valide: false,
        },
        {
          answer: "Livreuse",
          valide: true,
        },
        {
          answer: "Magicienne",
          valide: false,
        },
      ],
    },
  ];

  const [count, setCount] = useState(0);

  const handleClickQuizz = (e) => {
    const selectedAnswer = e.target.value;
    if (theQuizz[count].answers[selectedAnswer].valide) {
      if (count + 1 < theQuizz.length) {
        setCount(count + 1);
      } else {
        if (count === 5) {
          alert("5/5");
        } else if (count === 4) {
          alert("4/5");
        } else if (count === 3) {
          alert("3/5");
        } else if (count === 2) {
          alert("2/5");
        } else if (count === 1) {
          alert("1/5");
        } else {
          alert("0/5");
        };
      }
    }
  };

  console.error(theQuizz);

  return (
    <div className="quizz-container">
      <NavBar />
      <div className="quizz-div-global">
        <h1>THIS IS THE QUIZZ</h1>
        <h2>{theQuizz[count].question}</h2>
        <div className="quizz-div">
          {theQuizz[count].answers.map((x) => (
            <div onClick={handleClickQuizz}>{x.answer}</div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Quizz;
