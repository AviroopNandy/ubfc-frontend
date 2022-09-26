import React, { useEffect, useState } from "react";
import ExistingCustomerForm from "./ExistingCustomerForm";
import NewCustomerForm from "./NewCustomerForm";
import Navbar from "./../Navbar/Navbar";

import "./styles.css";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <>
      <Navbar/>
      <div className="home__container">
        <div className="home__buttons">
          <button
            className="home__newCustomer"
            onClick={() => {
              setIsClicked(true);
              setIsNewCustomer(true);
            }}
          >
            New Customer
          </button>
          <button
            className="home__existingCustomer"
            onClick={() => {
              setIsClicked(true);
              setIsNewCustomer(false);
            }}
          >
            Existing Customer
          </button>
        </div>
        <div className="home__customerForm">
          {isClicked ? (
            isNewCustomer ? (
              <NewCustomerForm />
            ) : (
              <ExistingCustomerForm />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
