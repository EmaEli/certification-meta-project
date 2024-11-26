import React from "react";
import BookingForm from "./BookingForm";
import restaurantImage from "../../assets/images/book-a-table.jpg"

function BookingPage({ availableTimes, updateAvailableTimes }) {
  return (
    <section className="booking-page">
      <div className="booking-container container">
      <h1 className="booking-form-title">Book a Table</h1>
        <div className="booking-content">
          <BookingForm
            availableTimes={availableTimes}
            updateAvailableTimes={updateAvailableTimes}
          />

          <div className="booking-info">
            <img
              src={restaurantImage}
              alt="Little Lemon Restaurant"
              className="booking-info-image"
            />
            <div className="booking-info-details">
              <h2>Contact Us</h2>
              <p><strong>Phone:</strong> +1 (800) 555-1234<br />
              <strong>Email:</strong> info@littlelemon.com</p>
              <h2>Address</h2>
              <p>123 Lemon Street, Chicago, IL</p>
              <h2>How to Reach Us</h2>
              <p>We are located in the heart of Chicago. Easily reachable by public transportation or by car.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
