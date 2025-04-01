// Reviews Component
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/api";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p><strong>{review.author}:</strong> {review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
}

export default Reviews;
