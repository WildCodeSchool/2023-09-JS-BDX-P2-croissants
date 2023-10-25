import { Link } from "react-router-dom";

function MoovieCard({ api }) {
  return (
    <div className="moovie-container">
      {api.map((moovie) => (
        <Link
          key={moovie.id}
          className="moovie-div"
          to={`/thisMoovie/${moovie.title}`}
        >
          <img className="moovie-img" src={moovie.image} alt={moovie.title} />
          <h3 className="moovie-h3">{moovie.title}</h3>
          <p>{moovie.release_date}</p>
          <div>⭐ : {moovie.rt_score}</div>
        </Link>
      ))}
    </div>
  );
}
export default MoovieCard;
