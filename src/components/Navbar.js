import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container ">
          <a href="#" className="navbar-brand">
            <h2 className="h2">BrandName</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavBarId"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="myNavBarId">
            <ul className="navbar-nav text-center ml-auto">
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
