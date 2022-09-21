import React, { useState } from "react";
import Login from "../Login";
import Register from "../Register";

import "./styles.css";

const Landing = () => {
  const [registerVisible, setRegisterVisible] = useState(false);

  function toggle() {
    setRegisterVisible(!registerVisible);
  }

  return (
    <>
      <div className="landing__container">
        {!registerVisible && <Login onRegister={toggle} />}
        {registerVisible && <Register onLogin={toggle} />}
      </div>
    </>
  );
};

export default Landing;
