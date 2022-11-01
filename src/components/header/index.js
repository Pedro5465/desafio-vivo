import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link className="li" to="/">
            Início
          </Link>
          <Link className="li" to="/feedback">
            Feedback
          </Link>
        </ul>
      </nav>
    </header>
  );
}
