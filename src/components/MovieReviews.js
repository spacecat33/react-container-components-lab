// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return(
    <div className="review-list">
      <h2>{props.header}</h2>
      {props.reviews.map(review =>
        <div className="review" key={review.display_title}>
          <br />
          <a href={review.link.url}>{review.display_title}</a>
          <br />
          by: {review.byline}
        </div>)}
    </div>
  )
}

export default MovieReviews
