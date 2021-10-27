import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { popularMoviesAPI } from "../../services/moviesAPI";
import styles from "./HomePage.module.css";

// const status = {
//   IDLE: "idle",
//   PENDING: "pending",
//   REJECTED: "reject",
//   RESOLVED: "resolved",
// };

// const { IDLE, PENDING, REJECTED, RESOLVED } = status;

export default function HomePage({ title }) {
  // const {url} = useRouteMatch();
  const [movies, setMovies] = useState(null);
  // const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    popularMoviesAPI()
      .then(setMovies)
      // .then(console.log(movies))
      // .then(setStatus(RESOLVED))
      .catch((e) => console.log(e));
  }, []);

  const {
    homePage,
    homePage__title,
    homePage__list,
    homePage__link,
    homePage__item,
  } = styles;
  return (
    <div className={homePage}>
      <h1 className={homePage__title}>{title}</h1>
      <ul className={homePage__list}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} className={homePage__item}>
              <Link className={homePage__link} to={`/movies/${movie.id}`}>
                {movie.name || movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

// if (status === IDLE) {
//   return <p>Hm</p>;
// }

// if (status === PENDING) {
//   return <h1>Wait</h1>;
// }

// if (status === REJECTED) {
//   return <h1>Wooops</h1>;
// }

// if (status === RESOLVED) {
//   return (
//     <>
//       <h1>Trending today</h1>
//       <ul>
//         {/* {movies.map((movie) => (
//           <li className="li">{movie.name}</li>
//         ))} */}
//         <p>LOl</p>
//       </ul>
//     </>
//   );
// }
