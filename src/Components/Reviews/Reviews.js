import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { reviewsAPI } from "../../services/moviesAPI";
import styles from "./Reviews.module.css";

export default function Cast() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    reviewsAPI(moviesId)
      .then(setReviews)
      .catch((e) => console.log(e));
  }, []);

  const { reviewsSt__txt, reviewsSt__title, reviewsSt__item, reviewsSt } =
    styles;
  return (
    <ul className={reviewsSt}>
      {reviews && reviews !== [] ? (
        reviews.results.map((review) => (
          <li key={review.id} className={reviewsSt__item}>
            <h3 className={reviewsSt__title}>Author name: {review.author}</h3>
            <p className={reviewsSt__txt}>{review.content}</p>
          </li>
        ))
      ) : (
        <p>lol</p>
      )}
    </ul>
  );
}
