import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { reviewsAPI } from "../../services/moviesAPI";

export default function Cast() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    reviewsAPI(moviesId)
      .then(setReviews)
      .catch((e) => console.log(e));
  }, []);

  return (
    <ul>
      {reviews &&
        reviews.results.map((review) => (
          <li key={review.id}>
            <h3>Author name: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
}
