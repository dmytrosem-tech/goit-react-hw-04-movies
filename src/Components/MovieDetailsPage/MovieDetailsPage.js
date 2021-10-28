import { useState, useEffect, lazy, Suspense } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  useParams,
  Route,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { moreInfoAPI } from "../../services/moviesAPI";
// import ArrowUp from "../ArrowUp/ArrowUp";
import default_poster from "../../images/avatarko_anonim_w300.jpg";
import styles from "./MoviesDetailsPage.module.css";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName: "Review" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    moreInfoAPI(movieId)
      .then(setMovie)
      .catch((e) => console.log(e));
  }, [movieId]);

  const onBack = () => {
    history.push(location?.state?.from ?? "/");
  };

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
    movieSt__aditionalLink,
    movieSt__activeLink,
    item,
  } = styles;

  return (
    <div>
      {movie && (
        <div className={movieSt}>
          <button type="button" className={movieST__btn} onClick={onBack}>
            <AiOutlineArrowLeft style={{ marginRight: 8 }} />
            {location?.state?.label ?? "Go back"}
          </button>
          <div className={movieSt__descr1}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : default_poster
              }
              alt={movie.orginal_title}
              className={movieSt__poster}
            />
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
          </div>

          <div className={movieSt__aditional}>
            <ul className={movieSt__aditionalList}>
              <li className={item}>
                <NavLink
                  to={`/movies/${movie.id}/cast`}
                  className={movieSt__aditionalLink}
                  activeClassName={movieSt__activeLink}
                >
                  Cast
                </NavLink>
              </li>
              <li className={item}>
                <NavLink
                  to={`/movies/${movie.id}/reviews`}
                  className={movieSt__aditionalLink}
                  activeClassName={movieSt__activeLink}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback="so so">
        <Route path="/movies/:moviesId/cast">
          <Cast />
          {/* <ArrowUp /> */}
        </Route>
        <Route path="/movies/:moviesId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </div>
  );
}
