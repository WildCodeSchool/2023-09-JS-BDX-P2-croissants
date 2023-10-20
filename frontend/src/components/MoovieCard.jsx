function MoovieCard({ api }) {
  return api.map((moovie, index) => <div>{moovie.title}</div>);
}
export default MoovieCard;
