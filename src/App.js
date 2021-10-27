import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";

const NotFoundView = lazy(() =>
  import("./views/NotFound" /* webpackChunkName: "NotFoundView" */)
);
const HomePage = lazy(() =>
  import("./Components/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./Components/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Components/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback="Do not be so fast :)">
        <Switch>
          <Route exact path="/">
            <HomePage title="TRENDING TODAY" />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
