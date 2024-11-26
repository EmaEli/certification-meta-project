import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage/HomePage";
import ReservationManager from "./pages/BookingPage/ReservationManager";
import './styles/index.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<ReservationManager />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
