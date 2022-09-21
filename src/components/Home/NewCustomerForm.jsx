import React, { useState } from "react";

const NewCustomerForm = () => {
  const [newCustomerDetails, setNewCustomerDetails] = useState({
    mobile: "",
    productInterested: [],
    amount: "",
    occupation: "Dairy Farm",
    occupationExtra: "",
    dependentsCount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newCustomerForm">
      <div className="newCustomerForm__heading">Form for New Customer</div>
      <div className="newCustomerForm__form">
        <form>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Mobile Number</label>
            </div>
            <div>
              <input
                type="tel"
                // placeholder="XXXXXXXXXX"
                value={newCustomerDetails.mobile}
                onChange={(e) =>
                  setNewCustomerDetails({
                    ...newCustomerDetails,
                    mobile: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Product Interested</label>
            </div>
            <div className="newCustomerForm__productsList">
              <input type="checkbox" name="product1" />
              <label htmlFor="product1">Vehicle Insurance</label>
              <br />
              <input type="checkbox" name="product2" />
              <label htmlFor="product2">Hospi-Cash</label>
              <br />
              <input type="checkbox" name="product3" />
              <label htmlFor="product3">Digital Gold</label>
              <br />
              <input type="checkbox" name="product4" />
              <label htmlFor="product4">Yes Bank Account</label>
              <br />
              <input type="checkbox" name="product5" />
              <label htmlFor="product5">Loan</label>
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Occupation</label>
            </div>
            <div>
              <select
                className="newCustomerForm__occupationsList"
                value={newCustomerDetails.occupation}
                onChange={(e) => {
                  setNewCustomerDetails({
                    ...newCustomerDetails,
                    occupation: e.target.value,
                  });
                  console.log(newCustomerDetails.occupation);
                }}
              >
                <option value="Dairy Farm">Dairy Farm</option>
                <option value="Retail Store">Retail Store</option>
              </select>
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              {newCustomerDetails.occupation === "Dairy Farm" ? (
                <label>Number of Cattle</label>
              ) : newCustomerDetails.occupation === "Retail Store" ? (
                <label>Size of Store</label>
              ) : null}
            </div>
            <div>
              <input
                type="tel"
                value={newCustomerDetails.occupationExtra}
                onChange={(e) =>
                  setNewCustomerDetails({
                    ...newCustomerDetails,
                    occupationExtra: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Number of Dependents</label>
            </div>
            <div>
              <input
                type="tel"
                value={newCustomerDetails.dependentsCount}
                onChange={(e) =>
                  setNewCustomerDetails({
                    ...newCustomerDetails,
                    dependentsCount: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Aadhar Card Image -- Applicant</label>
            </div>
            <div>
              <input type="file" accept="image/*" />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Second Identification Document Image -- Applicant</label>
            </div>
            <div>
              <input type="file" accept="image/*" />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>Aadhar Card Image -- Co-Applicant</label>
            </div>
            <div>
              <input type="file" accept="image/*" />
            </div>
          </div>
          <div className="newCustomerForm__formItem">
            <div>
              <label>
                Second Identification Document Image -- Co-Applicant
              </label>
            </div>
            <div>
              <input type="file" accept="image/*" />
            </div>
          </div>
          {newCustomerDetails.productInterested === "Vehicle Insurance" ? (
            <div className="newCustomerForm__formItem">
              <div>
                <label>Vehicle Registration Document Image</label>
              </div>
              <div>
                <input type="file" accept="image/*" />
              </div>
            </div>
          ) : null}
          <div className="newCustomerForm__submit">
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCustomerForm;
