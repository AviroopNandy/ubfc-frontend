import "./styles.css";
import Input from "./input";

export default function Login(props) {
  return (
    <>
      <div className="Login__login-page">
        <div className="Login__login-container">
          <form>
            <div className="Login__heading">Login</div>
            <div className="Login__login-form">
              <Input
                label="User Id"
                id="user-id"
                type="text"
                placeholder="Enter user id"
                name="userid"
              />
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="Login__button-box">
              <button>Login</button>
            </div>
            <div className="Login__signup-portion">
              <span className="Login__signup-text">Don't have an account?</span>
              <span className="Login__signup" onClick={props.onRegister}>
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
