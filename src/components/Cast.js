import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "../services/api";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
}

export default Cast;