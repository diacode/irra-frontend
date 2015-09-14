import React from "react";
import { Link } from "react-router";

export default class MoviesHandler extends React.Component {
  render() {
    const movieListArray = [
      {id: 1, title: 'Ghostbusters'},
      {id: 2, title: 'Home Alone'}
    ];

    const movieList = movieListArray.map(movie =>
      <li><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
    );

    return (
      <div className="movies-index">
        <ul>
          {movieList}
        </ul>
      </div>
    );
  }
}
