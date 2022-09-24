import axios from "axios";
import React, { useState } from "react";

const NewCustomerForm = () => {
  const [newCustomerDetails, setNewCustomerDetails] = useState({
    mobile: "",
    productInterested: {
      vehicleInsurance: false,
      hospiCash: false,
      digitalGold: false,
      yesBankAccount: false,
      loan: false,
    },
    amount: "",
    occupation: "Dairy Farm",
    occupationExtra: "",
    dependentsCount: "",
    applicantAadhar: "",
  });

  const [applicantAadhar, setApplicantAadhar] = useState();

  const modifyProductsList = (product) => {
    if (product === "vehicleInsurance") {
      setNewCustomerDetails({
        ...newCustomerDetails,
        productInterested: {
          vehicleInsurance:
            !newCustomerDetails.productInterested.vehicleInsurance,
          hospiCash: newCustomerDetails.productInterested.hospiCash,
          digitalGold: newCustomerDetails.productInterested.digitalGold,
          yesBankAccount: newCustomerDetails.productInterested.yesBankAccount,
          loan: newCustomerDetails.productInterested.loan,
        },
      });
    } else if (product === "hospiCash") {
      setNewCustomerDetails({
        ...newCustomerDetails,
        productInterested: {
          vehicleInsurance:
            newCustomerDetails.productInterested.vehicleInsurance,
          hospiCash: !newCustomerDetails.productInterested.hospiCash,
          digitalGold: newCustomerDetails.productInterested.digitalGold,
          yesBankAccount: newCustomerDetails.productInterested.yesBankAccount,
          loan: newCustomerDetails.productInterested.loan,
        },
      });
    } else if (product === "digitalGold") {
      setNewCustomerDetails({
        ...newCustomerDetails,
        productInterested: {
          vehicleInsurance:
            newCustomerDetails.productInterested.vehicleInsurance,
          hospiCash: newCustomerDetails.productInterested.hospiCash,
          digitalGold: !newCustomerDetails.productInterested.digitalGold,
          yesBankAccount: newCustomerDetails.productInterested.yesBankAccount,
          loan: newCustomerDetails.productInterested.loan,
        },
      });
    } else if (product === "yesBankAccount") {
      setNewCustomerDetails({
        ...newCustomerDetails,
        productInterested: {
          vehicleInsurance:
            newCustomerDetails.productInterested.vehicleInsurance,
          hospiCash: newCustomerDetails.productInterested.hospiCash,
          digitalGold: newCustomerDetails.productInterested.digitalGold,
          yesBankAccount: !newCustomerDetails.productInterested.yesBankAccount,
          loan: newCustomerDetails.productInterested.loan,
        },
      });
    } else if (product === "loan") {
      setNewCustomerDetails({
        ...newCustomerDetails,
        productInterested: {
          vehicleInsurance:
            newCustomerDetails.productInterested.vehicleInsurance,
          hospiCash: true,
          digitalGold: true,
          yesBankAccount: true,
          loan: !newCustomerDetails.productInterested.loan,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", applicantAadhar);
    formData.append("upload_preset", "ixwl2u6l");
    axios
      .post("https://api.cloudinary.com/v1_1/dxq2unude/image/upload", formData)
      .then((response) => {
        console.log(response);
        console.log(response.data.url);
        setNewCustomerDetails({
          ...newCustomerDetails,
          applicantAadhar: response.data.url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newCustomerForm">
      <div className="newCustomerForm__heading">Form for New Customer</div>
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
          </fieldset>
          <fieldset>
            <legend>Product Interested</legend>
            <div className="newCustomerForm__formItem">
              <div>
                <label>
                  Please select the products in which you are interested
                </label>
              </div>
              <div className="newCustomerForm__productsList">
                <input
                  type="checkbox"
                  name="product1"
                  value={newCustomerDetails.productInterested.vehicleInsurance}
                  checked={
                    newCustomerDetails.productInterested.vehicleInsurance
                  }
                  onChange={() => modifyProductsList("vehicleInsurance")}
                />
                <label htmlFor="product1">Vehicle Insurance</label>
                <br />
                <input
                  type="checkbox"
                  name="product2"
                  value={newCustomerDetails.productInterested.hospiCash}
                  checked={newCustomerDetails.productInterested.hospiCash}
                  onChange={() => modifyProductsList("hospiCash")}
                />
                <label htmlFor="product2">Hospi-Cash</label>
                <br />
                <input
                  type="checkbox"
                  name="product3"
                  value={newCustomerDetails.productInterested.digitalGold}
                  checked={newCustomerDetails.productInterested.digitalGold}
                  onChange={() => modifyProductsList("digitalGold")}
                />
                <label htmlFor="product3">Digital Gold</label>
                <br />
                <input
                  type="checkbox"
                  name="product4"
                  value={newCustomerDetails.productInterested.yesBankAccount}
                  checked={newCustomerDetails.productInterested.yesBankAccount}
                  onChange={() => modifyProductsList("yesBankAccount")}
                />
                <label htmlFor="product4">Yes Bank Account</label>
                <br />
                <input
                  type="checkbox"
                  name="product5"
                  value={newCustomerDetails.productInterested.loan}
                  checked={newCustomerDetails.productInterested.loan}
                  onChange={() => modifyProductsList("loan")}
                />
                <label htmlFor="product5">Loan</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Occupation</legend>
            <div className="newCustomerForm__formItem">
              <div>
                <label>Please choose your occupation from the list</label>
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
                  <label>Please enter the number of cattle owned</label>
                ) : newCustomerDetails.occupation === "Retail Store" ? (
                  <label>Please enter the size of your store</label>
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
                <label>Please enter the number of dependents</label>
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
          </fieldset>
          <fieldset>
            <legend>Verification Images -- Applicant</legend>
            <div className="newCustomerForm__formItem">
              <div>
                <label>Please upload Aadhar Card Image</label>
              </div>
              <div>
                <input
                  type="file"
                  onChange={(e) => setApplicantAadhar(e.target.files[0])}
                  accept="image/*"
                />
              </div>
            </div>
            <div className="newCustomerForm__formItem">
              <div>
                <label>
                  Please upload a secondary Identification Document Image
                </label>
              </div>
              <div>
                <input type="file" accept="image/*" />
              </div>
            </div>
            {newCustomerDetails.productInterested.vehicleInsurance === true ? (
              <div className="newCustomerForm__formItem">
                <div>
                  <label>
                    Please upload Vehicle Registration Document Image
                  </label>
                </div>
                <div>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            ) : null}
          </fieldset>
          <fieldset>
            <legend>Verification Images -- Co-Applicant</legend>
            <div className="newCustomerForm__formItem">
              <div>
                <label>Please upload Aadhar Card Image</label>
              </div>
              <div>
                <input type="file" accept="image/*" />
              </div>
            </div>
            <div className="newCustomerForm__formItem">
              <div>
                <label>
                  Please upload a secondary Identification Document Image
                </label>
              </div>
              <div>
                <input type="file" accept="image/*" />
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

export default NewCustomerForm;
