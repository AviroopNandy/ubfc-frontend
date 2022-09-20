import React from "react";
import Login from "../Login";
import Register from "../Register";

import "./styles.css";

const Landing = () => {
  return (
    <>
      <div className="landing__container">
        <Login />
        <Register />
      </div>
    </>
  );
};

export default Landing;
