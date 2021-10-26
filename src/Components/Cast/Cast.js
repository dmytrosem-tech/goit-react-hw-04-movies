import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { castAPI } from "../../services/moviesAPI";

export default function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    castAPI(moviesId)
      .then(setCast)
      .catch((e) => console.log(e));
  }, [moviesId]);

  return (
    <ul>
      {cast &&
        cast.map((actor) => (
          <li key={actor.cast_id}>
            <p>{actor.name}</p>
          </li>
        ))}
    </ul>
  );
}
