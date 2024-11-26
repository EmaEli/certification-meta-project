import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import resturantFood from "../../assets/images/restaurant-food.jpg";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="call-to-action-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>

          <Button
            onClick={() => navigate("/booking")}
            label="Reserve a table"
          />
        </div>

        <img src={resturantFood} alt="Delicious Mediterranean food" />
      </div>
    </section>
  );
}

export default CallToAction;
