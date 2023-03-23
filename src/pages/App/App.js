import "./App.css";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ActorPage from "../ActorPage/ActorPage";
import MoviePage from "../MoviePage/MoviePage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import SignupPage from "../SignupPage/SignupPage";
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Welcome, {user}!</h1>
          <NavBar />
          <Switch>
            <Route exact path="/movies">
              <MoviePage movies={movies} />
            </Route>
            <Route path="/movies/:movieName">
              <MovieDetailPage movies={movies} />
            </Route>
            <Route exact path="/actors">
              <ActorPage movies={movies} />
            </Route>
            <Redirect to="/movies" />
          </Switch>
        </>
      ) : (
        <SignupPage setUser={setUser} />
      )}
    </div>
  );
}
