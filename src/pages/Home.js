// Home Component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className="title">Trending Movies</h1>
      {movies ? (
        <ul className="list">
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
}


export default Home;