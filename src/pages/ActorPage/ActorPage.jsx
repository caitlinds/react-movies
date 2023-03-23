import "./ActorPage.css";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorPage({ movies }) {
  let obj = {};

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      obj[actor] = 1;
    });
  });

  let actorList = Object.keys(obj);

  return (
    <div className="container">
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}
