import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container";
import NotFoundView from "./views/NotFound";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";

export default function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
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
    </Container>
  );
}
