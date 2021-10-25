import { Route } from "react-router-dom";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";

export default function App() {
  return (
    <Container>
      <Navigation />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
    </Container>
  );
}
