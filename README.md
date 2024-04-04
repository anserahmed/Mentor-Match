
<!-- Navigation -->
import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navbarr">
      <div className="containerr">
        <h1 className="logo">Mentor Match</h1>
        <ul className="nav-links">
          <li>
            <Link to="/"></Link>Home
          </li>
          <li>
            <Link to="/about"></Link>About
          </li>
          <li>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
<!-- Landing PAge -->

import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="heroine">
        <div className="container">
          <h1>Welcome to MentorMatch</h1>
          <p>Find the perfect mentor to guide you in your journey.</p>
        </div>
        <section className="get-started">
          <div className="container">
            <h2>Get Started</h2>
            <p>Sign up now to start your mentoring journey!</p>
            <Link to="/signup" className="btnn btn-primary">
              Sign Up
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
};

export default LandingPage;



# Mentor-Match
