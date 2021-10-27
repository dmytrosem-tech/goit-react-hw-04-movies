import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, Route, NavLink } from "react-router-dom";
import { moreInfoAPI } from "../../services/moviesAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import default_poster from "../../images/avatarko_anonim.jpg";
import styles from "./MoviesDetailsPage.module.css";
// import MoviesPage from "../MoviesPage";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // let poster = movie.poster_path
  //   ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
  //   : default_poster;

  useEffect(() => {
    moreInfoAPI(movieId)
      .then(setMovie)
      .catch((e) => console.log(e));
  }, [movieId]);

  const {
    movieSt,
    movieST__btn,
    movieSt__title,
    movieSt__score,
    movieSt__overviewTitle,
    movieSt__overviewText,
    movieSt__poster,
    movieSt__descr1,
    movieSt__descr2,
    movieSt__genresTitle,
    movieSt__genresList,
    movieSt__genresItem,
    movieSt__aditional,
    movieSt__aditionalList,
    movieSt__aditionalItem,
  } = styles;

  return (
    <div>
      {movie && (
        <div className={movieSt}>
          <div className={movieSt__descr1}>
            <button type="button" className={movieST__btn}>
              <AiOutlineArrowLeft style={{ marginRight: 8 }} />
              <NavLink style={{ textDecoration: "none" }} to="/">
                Go back
              </NavLink>
            </button>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : default_poster
              }
              alt={movie.orginal_title}
              className={movieSt__poster}
            />
          </div>
          <div className={movieSt__descr2}>
            <h1 className={movieSt__title}>{movie.title || movie.name}</h1>
            <p className={movieSt__score}>User score {movie.vote_average}</p>
            <h2 className={movieSt__overviewTitle}>Overview</h2>
            <p className={movieSt__overviewText}>{movie.overview}</p>

            <h3 className={movieSt__genresTitle}>Genres</h3>
            <ul className={movieSt__genresList}>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <li key={genre.id} className={movieSt__genresItem}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className={movieSt__aditional}>
            <ul className={movieSt__aditionalList}>
              <li className={movieSt__aditionalItem}>
                <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
              </li>
              <li className={movieSt__aditionalItem}>
                <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Route path="/movies/:moviesId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:moviesId/reviews">
        <Reviews />
      </Route>
    </div>
  );
}
