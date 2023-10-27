import NavBar from "../components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="container-History">
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
        <img src="../assets/nous/Studio_Ghibli_studio_3.jpg" alt="Studio" />
      </div>
      <div className="container-best-Films">
        <h1>Les Meilleurs Longs métrages</h1>
        <line>
          -1986 : Le Château dans le ciel de Hayao Miyazaki 1988 : Mon voisin
          Totoro de Hayao Miyazaki -1988 : Le Tombeau des lucioles d'Isao
          Takahata -1989 : Kiki la petite sorcière de Hayao Miyazaki 1991 :
          Souvenirs goutte à goutte d'Isao Takahata 1992 : Porco Rosso de Hayao
          Miyazaki 1993 : Je peux entendre l'océan de Tomomi Mochizuki —
          téléfilm 1994 : Pompoko d'Isao Takahata 1995 : Si tu tends l'oreille
          de Yoshifumi Kondō 1997 : Princesse Mononoké de Hayao Miyazaki 1999 :
          Mes voisins les Yamada d'Isao Takahata 2001 : Le Voyage de Chihiro de
          Hayao Miyazaki 2002 : Le Royaume des chats de Hiroyuki Morita 2004 :
          Le Château ambulant de Hayao Miyazaki 2006 : Les Contes de Terremer de
          Gorō Miyazaki 2008 : Ponyo sur la falaise de Hayao Miyazaki 2010 :
          Arrietty, le petit monde des chapardeurs de Hiromasa Yonebayashi 2011
          : La Colline aux coquelicots de Gorō Miyazaki 2013 : Le vent se lève
          de Hayao Miyazaki 2013 : Le Conte de la princesse Kaguya d'Isao
          Takahata 2014 : Souvenirs de Marnie de Hiromasa Yonebayashi 2016 : La
          Tortue rouge de Michael Dudok de Wit — coproduction57,58 2020 : Aya et
          la Sorcière de Gorō Miyazaki59 — coproduction — téléfilm 2023 : Le
          Garçon et le Héron de Hayao Miyazaki
        </line>
      </div>
    </div>
  );
}

export default About;
