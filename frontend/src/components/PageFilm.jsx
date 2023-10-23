//Titre, description, image et bande annonce
//https://www.figma.com/file/36APtSJkJkNRJWr8JM0EvZ/Ghibli-studio-project?type=design&node-id=0-1&mode=design&t=Dzx1XJ3bD1PYzCNC-0

function PageFilm() {
  return (
    <main id="pageFilm">
      <div id="img-film-container">
        <img id="img-film" src="" alt="img du film, 16rem x 16rem" />
      </div>
      <h2 id="movie-title-page">Titre du film</h2>
      <div id="synopsis-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
        luctus fermentum. Praesent non dolor in tellus consectetur sagittis.
        Morbi id lectus sed tellus imperdiet elementum vel venenatis nunc.
        Praesent efficitur non ipsum ac bibendum. In arcu ex, feugiat nec velit
        nec, mollis accumsan ante. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Etiam consequat velit dapibus feugiat cursus
      </div>
      <div id="trailer-container">
        <img id="img-trailer" src="" alt="trailer, 16rem x 16rem" />
      </div>
    </main>
  );
}

export default PageFilm;
