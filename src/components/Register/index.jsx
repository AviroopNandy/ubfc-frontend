import "./styles.css";
import Input from "./input";

export default function Signup(props) {
  return (
    <>
      <div className="Signup__login-page">
        <div className="Signup__login-container">
          <form>
            <div className="Signup__heading">Signup</div>
            <div className="Signup__login-form">
              <Input
                label="Full Name"
                id="fullname"
                type="text"
                placeholder="Enter fullname"
                name="fullname"
              />
              <Input
                label="Phone"
                id="phone"
                type="number"
                placeholder="Enter phone number"
                name="phone"
              />
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                name="password"
              />
              <Input
                label="Confirm Password"
                id="cpassword"
                type="password"
                placeholder="Confirm password"
                name="cpassword"
              />
            </div>
            <div className="Signup__button-box">
              <button>Signup</button>
            </div>
            <div className="Signup__signup-portion">
              <span className="Signup__signup-text">
                Already have an account?
              </span>
              <span className="Signup__signup" onClick={props.onLogin}>
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
