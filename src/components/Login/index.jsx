import "./styles.css";
import Input from "./input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/auth/authApi";

export default function Login(props) {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [pass, setPass] = useState("");
  
  function handleLogin(e){
    e.preventDefault();
    let userData = {
      "userid": userid,
      "password": pass,
    };

    authApi.login(userData).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })


    console.log("\nSuccessfully Logged in");
    setUserid("");
    setPass("");

    // props.onLogin();
    navigate("/home");
  }


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
                name="userid" value={userid} onChange={(e)=>{setUserid(e.target.value)}}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                name="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}
              />
            </div>
            <div className="Login__button-box">
              <button onClick={handleLogin}>Login</button>
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
