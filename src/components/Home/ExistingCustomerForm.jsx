import React, { useState } from "react";

const ExistingCustomerForm = () => {
  const [existingCustomerDetails, setExistingCustomerDetails] = useState({
    mobile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(existingCustomerDetails);
  };

  return (
    <div className="newCustomerForm">
      <div className="newCustomerForm__heading">Form for Existing Customer</div>
      <div className="newCustomerForm__form">
        <form>
          <fieldset>
            <legend>Mobile Number</legend>
            <div className="newCustomerForm__formItem">
              <div>
                <label>Please enter your mobile number (10 digits)</label>
              </div>
              <div>
                <input
                  type="tel"
                  // placeholder="XXXXXXXXXX"
                  value={existingCustomerDetails.mobile}
                  onChange={(e) =>
                    setExistingCustomerDetails({
                      ...existingCustomerDetails,
                      mobile: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </fieldset>
          <div className="newCustomerForm__submit">
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExistingCustomerForm;
