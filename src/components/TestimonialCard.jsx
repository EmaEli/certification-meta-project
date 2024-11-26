import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function TestimonialsCard({ name, feedback, rating, image }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i < rating ? fullStar : emptyStar}
          className="testimonial-star"
        />
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        <img
          src={image}
          alt={name}
          className="testimonial-image"
        />
        <div>
          <p className="testimonial-name">{name}</p>
          <div className="testimonial-rating">{renderStars()}</div>
        </div>
      </div>
      <p className="testimonial-feedback">"{feedback}"</p>
    </div>
  );
}

TestimonialsCard.propTypes = {
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialsCard;
