function About() {
  const history = [
    {
      id: 0,
      title:
        "Le Voyage de Shuna : Un chef-d’œuvre littéraire signé Hayao Miyazaki",
      img: "https://www.studioghibli.fr/wp-content/uploads/2023/10/voyage-de-shuna-Hayao-Miyazaki-livre-francais.jpg",
      content:
        "Les œuvres de Hayao Miyazaki ont toujours suscité l’admiration des amateurs de films d’animation à travers le monde. Le réalisateur japonais, célèbre pour ses chefs-d’œuvre cinématographiques tels que « Le Voyage de Chihiro » et « Le Château dans le Ciel« , est également un auteur talentueux. Aujourd’hui, nous plongeons dans l’un de ses trésors littéraires les plus méconnus, …",
      date: 1700000000000,
      star: "⭐⭐⭐",
    },
    {
      id: 1,
      title:
        "Le Garçon et le Héron : Hayao Miyazaki revient avec un nouveau chef-d’œuvre",
      img: "https://www.studioghibli.fr/wp-content/uploads/2023/10/le-garcon-et-le-Hero-image-miyazaki.png",
      content:
        "Tous les fans du studio Ghibli sont prêts, après 10 ans d’absence, un nouveau film d’Hayao Miyazaki s’apprête à sortir au cinéma ! Une nouvelle merveille cinématographique est sur le point d’atterrir sur nos écrans. Hayao Miyazaki, le génie derrière des chefs-d’œuvre tels que « Le Voyage de Chihiro » et « Princesse Mononoké« , nous surprend à nouveau …",
      date: 1621530288602,
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      title: "Le livre L’Art du film Le garçon et le Héron d’Hayao Miyazaki",
      img: "https://www.studioghibli.fr/wp-content/uploads/2023/10/Lart-du-film-Le-garcon-et-le-Heron-dHayao-Miyazaki-sortira-au-Japon-le-1er-novembre.jpg",
      content:
        "Décidément, le 1er novembre sera une belle date pour le studio Ghibli, après l’annonce de la sortie du livre Le voyage de Shuna de Hayao Miyazaki enfin édité en français ainsi que la sortie au cinéma en France du film Le garçon et le héron, cette date marquera également la sortie du livre L’Art du …",
      date: 1621530288602,
      star: "⭐⭐",
    },
    {
      id: 3,
      title: "Mei et le chaton-bus, la suite de Mon voisin Totoro",
      img: "https://www.studioghibli.fr/wp-content/uploads/2023/10/Mei-et-le-chaton-bus-suite-de-mon-voisin-Totoro.jpg",
      content:
        "De tous les classiques du Studio Ghibli, Mon voisin Totoro est celui dont l’histoire est la plus simple mais aussi celui dont la fin est la moins concluante. Certes, les illustrations du générique de fin suggèrent que la maman Mei et Satsuki finit par se remettre des maux qui la retiennent à l’hôpital mais les …",
      date: 1621530288602,
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      title: "Nouvelle bande annonce venue d’Asie pour le Garçon et le Héron",
      img: "https://www.studioghibli.fr/wp-content/uploads/2023/09/garcon-et-heron-ghibli.jpg",
      content:
        "Après une première bande annonce américaine pour le Garçon et le Héron, c’est au tour de l’Asie de dévoiler une toute première bande annonce pour le nouveau film du studio Ghibli signé Hayao Miyazaki. Et contrairement à ce que l’on pourrait penser, il ne s’agit pas d’une bande annonce japonaise mais la vidéo nous arrive …",
      date: 1621530288602,
      star: "⭐⭐",
    },
    {
      id: 5,
      title: "Arrietty, le petit monde des chapardeurs",
      img: "https://tse4.mm.bing.net/th?id=OIP.EP0OXrYi-ubSFoT0nEpgeQHaD4&pid=Api&P=0&h=180",
      content:
        "Dans la banlieue de Tokyo, sous le plancher d'une vieille maison perdue au cur d'un immense jardin, la minuscule Arrietty vit en secret avec sa famille....",
      date: 1621530288602,
      star: "⭐⭐⭐⭐",
    },
    {
      id: 6,
      title: "Aya et la sorcière",
      img: "https://img-4.linternaute.com/aZW6M9Ck8fRWwf7mEh1Uhvr2aZE=/200x260/f8dabddb07ee48c98871212049063888/ccmcms-linternaute/193373.jpg",
      content:
        "Le film est sorti le 18 novembre 2021. Actuellement, aucune annonce de renouvellement n’a été faite concernant la sortie de Aya et la Sorcière 2 sur Netflix. Depuis sa création en juin 1985, Ghibli n’a jamais produit de suite. Par ailleurs, le film est l’adaptation à l’écran du roman pour enfants éponyme publié en 2011 par l’auteur britannique Diana Wynne Jones.",
      date: 1621530288606,
      star: "⭐⭐⭐",
    },
  ];
  const dateFormater = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };
  return (
    <div className="container">
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
      <textarea className="input-actuality" type="text" placeholder="Contenu">
        Bonjour
      </textarea>
      <div className="container-actuality">
        <h2>ACTUALITE:</h2>
        {history.map((list) => (
          <ul>
            <h1>{list.title}</h1>
            <div className="container-img">
              <img src={list.img} alt={list.title} />
            </div>
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
