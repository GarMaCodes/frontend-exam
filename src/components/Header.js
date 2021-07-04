import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to={"/"} className="title_text">
          Ordenes de compra
        </Link>
      </h1>
    </nav>
  );
};

export default Header;
