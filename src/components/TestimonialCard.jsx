import React from "react";
import PropTypes from "prop-types";

function TestimonialsCard({ name, feedback, rating, image }) {
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
          <div className="testimonial-rating">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
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
