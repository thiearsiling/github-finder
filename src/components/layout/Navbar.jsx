import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github" />
        <span className="m-1">{props.title}</span>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};
