// Movies Component
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../services/api";

function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="movies-container">
      <h1 className="movies-title">Search Movies</h1>
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <ul className="list">
        {movies.map(movie => (
          <li key={movie.id} className="list-item">
            <Link to={`/movies/${movie.id}`} className="movie-link">{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
