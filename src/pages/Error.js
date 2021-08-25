import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! it is a dead end</h1>
        <Link to="/" className="btn btn-primery">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
