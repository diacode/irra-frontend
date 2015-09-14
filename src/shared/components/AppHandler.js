import React from "react";
import { Link, RouteHandler } from "react-router";

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <Link to="/movies">Movies</Link>

        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}
