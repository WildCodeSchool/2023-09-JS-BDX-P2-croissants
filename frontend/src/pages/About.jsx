import axios from "axios";
import { useState, useEffect } from "react";

function About() {
  const [api, setApi] = useState([]);
  const [post, setPost] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then(({ data }) => {
        setApi(data[0].history);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des films:", error);
      });
  }, []);

  const dateFormater = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000", { post })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <button type="button">test</button>
      <div className="container-history">
        <h2>HISTORIQUE:</h2>
        <p>
          Le Studio Ghibli Inc. est un studio d'animation japonais fondé par
          Hayao Miyazaki et Isao Takahata en 1985. Il produit des longs-métrages
          et courts-métrages d'animation, ainsi que, dans une moindre mesure,
          des téléfilms, des séries et des jeux vidéo. Le studio est connu
          principalement pour ses longs-métrages destinés à un large public et
          dont plusieurs ont remporté des succès auprès de la critique et du
          public, ainsi que de nombreuses récompenses. Le logo du studio est une
          représentation de Totoro, une créature apparue dans Mon voisin Totoro,
          l'un des films emblématiques du studio, sorti en 1988.
        </p>
        <img src="../assets/nous/Studio_Ghibli_studio_3.png" alt="Studio" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="titre">Nom </label>
        <input type="text" name="name" id="name" onChange={handleInput} />
        <textarea
          className="input-actuality"
          type="text"
          name="content"
          placeholder="Nouveau post"
          onChange={handleInput}
        />
        <input type="submit" className="edit" value="Edit" />
      </form>
      <div className="container-actuality">
        <h2>ACTUALITE:</h2>
        {api.map((list) => (
          <ul key={list.id}>
            <h1>{list.title}</h1>
            <p>{list.content}</p>
            <div className="span">
              <span>Note : {list.star}</span>
            </div>
            <span>posté le: {dateFormater(list.date)}</span>

            <button type="button">Supprimer</button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default About;
