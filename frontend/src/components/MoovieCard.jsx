function MoovieCard({ api }) {
  return (
    <div className="moovie-container">
      {api.map((moovie) => (
        <div key={moovie.id} className="moovie-div">
          <img className="moovie-img" src={moovie.image} alt={moovie.title} />
          <h3 className="moovie-h3">{moovie.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default MoovieCard;
