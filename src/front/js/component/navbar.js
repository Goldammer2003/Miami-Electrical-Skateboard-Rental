import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar narbar-expand-lg bg-white py-3 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand text-dark">
          Skateboard Rentals South Beach
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                What You'll Learn
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">
                Questions
              </a>
            </li>
            <li clasName="nav-item">
              <a href="#instructors" className="nav-link">
                Instructors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
