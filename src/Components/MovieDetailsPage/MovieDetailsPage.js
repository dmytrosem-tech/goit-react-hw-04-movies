import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moreInfoAPI } from "../../Services/moviesAPI";
// import MoviesPage from "../MoviesPage";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moreInfoAPI(movieId)
      .then(setMovie)
      .catch((e) => console.log(e));
  }, [movieId]);

  return (
    <div className="movie">
      {movie && (
        <>
          <button type="button" className="movie__btn">
            Go back
          </button>
          <h1>{movie.title || movie.name}</h1>
          <p>User score {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          {/* <img src={movie.backdrop_path}/> */}
          <h3>Genres</h3>
          <ul>
            {movie.genres &&
              movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}
