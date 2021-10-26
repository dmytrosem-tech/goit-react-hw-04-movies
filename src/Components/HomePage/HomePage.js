import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { popularMoviesAPI } from "../../services/moviesAPI";

// const status = {
//   IDLE: "idle",
//   PENDING: "pending",
//   REJECTED: "reject",
//   RESOLVED: "resolved",
// };

// const { IDLE, PENDING, REJECTED, RESOLVED } = status;

export default function HomePage() {
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

  return (
    <>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id} className="item">
            <Link to={`/movies/${movie.id}`}>
              {movie.name || movie.original_title}
            </Link>
          </li>
        ))}
    </>
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
