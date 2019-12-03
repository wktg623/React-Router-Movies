import React from 'react';
import { Route, Link } from "react-router-dom";
import MovieList from "./MovieList"
import Movie from "./Movie"

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
   <h1> <Link to = "/">Movie List</Link></h1>
     {/* <h1> <Link to = "/movies: id">Movies</Link></h1> */}
    <div className="home-button"><Link to = "/home">
      Home</Link></div>
  </div>
);

export default SavedList;
