import { useState } from "react";
import NavBar from "../components/NavBar";

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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [theScore, setTheScore] = useState(0);

  const endCondition = () => (count >= 5 ? <h2>Bravo le 100</h2> : null);
  const handleClickSelectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleClickQuizz = (valide) => {
    if (valide) {
      if (count < theQuizz.length) {
        setTheScore(theScore + 1);
        setCount(count + 1);
        if (count < theQuizz.length) {
          setSelectedAnswer(null);
          setCount(count + 1);
        }
      }
    }
  };

  const isFalse = () => {
    if (count < theQuizz.length) {
      setCount(count + 1);
      setSelectedAnswer(null);
    }
  };

  const reset = () => {
    setCount(0);
    setTheScore(0);
  };

  return (
    <div className="quizz-container">
      <NavBar />
      <div className="quizz-div-global">
        <h1>THIS IS THE QUIZZ</h1>
        <h2>{theQuizz[count]?.question}</h2>
        {endCondition()}
        <div className="quizz-div">
          {theQuizz[count]?.answers.map((answer, index) => (
            <div>
              <button
                key={{ index }}
                type="button"
                onClick={() => handleClickSelectAnswer(index)}
                className={selectedAnswer === index ? "anime-button" : ""}
              >
                {answer.answer}
              </button>
            </div>
          ))}
        </div>

        {selectedAnswer !== null && count <= 5 && (
          <button
            type="button"
            className="button-next"
            onClick={
              theQuizz[count]?.answers[selectedAnswer]?.valide
                ? () => handleClickQuizz(true)
                : () => isFalse()
            }
            disabled={count >= 5 ? "disabled" : ""}
          >
            Valide
          </button>
        )}
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <h3>{theScore}/5</h3>
      </div>
    </div>
  );
}

export default Quizz;
