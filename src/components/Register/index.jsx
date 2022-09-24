import "./styles.css";
import Input from "./input";
import { useState } from "react";
import authApi from "../../api/auth/authApi";

export default function Signup(props) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  function handleSignup(e){
    e.preventDefault();
    let userData = {
      "fullname": name,
      "userid": phone,
      "phone": phone,
      "password": pass,
    };

    if(pass !== cpass){
      console.log("Password and Confirm Password don't match");
    }
    else{

      authApi.register(userData).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })


      console.log("\nSuccessfully signed up");
      setName("");
      setPhone("");
      setPass("");
      setCpass("");

      props.onLogin();
    }
  }

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
                name="fullname" value={name} onChange={(e)=>{setName(e.target.value)}}
              />
              <Input
                label="Phone"
                id="phone"
                type="number"
                placeholder="Enter phone number"
                name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                name="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}
              />
              <Input
                label="Confirm Password"
                id="cpassword"
                type="password"
                placeholder="Confirm password"
                name="cpassword" value={cpass} onChange={(e)=>{setCpass(e.target.value)}}
              />
            </div>
            <div className="Signup__button-box">
              <button onClick={handleSignup}>Signup</button>
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
