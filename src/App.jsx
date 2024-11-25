import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
