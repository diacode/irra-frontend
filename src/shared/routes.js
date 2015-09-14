import { Route } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import MoviesHandler from "./components/MoviesHandler";
import MovieHandler from "./components/MovieHandler";

export default (
  <Route handler={ AppHandler } path="/">
    <Route name="movies_index" path="/movies" handler={ MoviesHandler } />
    <Route name="movies_show" path="/movies/:id" handler={ MovieHandler } />
  </Route>
);
