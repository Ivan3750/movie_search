import { useParams, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="details-container">
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-overview">{movie.overview}</p>
      <nav className="details-nav">
        <Link to="cast" className="nav-link">Cast</Link>
        <span className="nav-separator">|</span>
        <Link to="reviews" className="nav-link">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
