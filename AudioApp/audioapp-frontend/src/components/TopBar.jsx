import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import "./style.css";

export const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <nav
      className={
        isScrolled
          ? "navbar navbar-expand-lg navbar-dark topbar_nav "
          : "navbar navbar-expand-lg navbar-light topbar_nav"
      }
    >
      <div className="collapse navbar-collapse topbar_style ">
        <Link className="navbar-brand" exact to="/#home">
          <Logo />
        </Link>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link
              className="nav-link "
              // style={{ color: "black" }}
              smooth
              exact
              to="/#feature-story"
            >
              feature story
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              // style={{ color: "black" }}
              smooth
              exact
              to="/#radioshows"
            >
              radio shows
            </Link>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              // style={{ color: "black" }}
              exact
              to="/story-posts/"
            >
              stories
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              // style={{ color: "black" }}
              smooth
              exact
              to="/#about"
            >
              who are we?
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
