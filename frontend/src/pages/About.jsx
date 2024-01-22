import axios from "axios";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import studio from "../assets/nous/Studio_Ghibli_studio_3.jpg";

function About() {
  const { list } = useLoaderData();
  const [api, setApi] = useState(list);
  const [post, setPost] = useState({
    name: "",
    content: "",
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/comments/${id}`);
      setApi([...api.filter((item) => item.id !== id)]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000", { post });
      setApi([data, ...api]);
    } catch (err) {
      console.error(err);
    }
  };

  const dateFormater = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  return (
    <div className="container">
      <div className="container-history">
        <h2>HISTORIQUE:</h2>
        <div className="image">
          <img src={studio} alt="Studio" />
        </div>
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
      </div>
      <form className="blog" action="" onSubmit={handleSubmit}>
        <label className="label" htmlFor="titre">
          Nom{" "}
        </label>
        <div className="inputs">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Entrer un titre"
            onChange={handleInput}
          />
          <input
            className="input"
            type="url"
            name="url"
            placeholder="URL"
            onChange={handleInput}
          />
        </div>
        <textarea
          className="input-actuality"
          type="text"
          name="content"
          placeholder="Nouveau post"
          onChange={handleInput}
        />

        <input type="submit" className="edit" value="Editer" />
      </form>
      <div className="container-actuality">
        <h2>ACTUALITE:</h2>
        {api.map((item) => (
          <ul key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.url} alt="" />
            <h3>Auteur : {item.name}</h3>
            <p>{item.content}</p>
            <span>Posté le: {dateFormater(item.date)}</span>
            <button type="button" onClick={() => handleDelete(item.id)}>
              Supprimer
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default About;
