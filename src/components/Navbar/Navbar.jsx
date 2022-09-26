import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth-context";
import "./Navbar.css";
import axios from "axios";

export default function Navbar(){
    const authCtx = useContext(AuthContext);

    const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLogin);

    useEffect(()=>{
        axios.get("http://localhost:5000/user/me").then((response)=>{
            console.log(response.data);
            setIsLoggedIn(true);
        }).catch((error)=>{
            console.log(error);
        })

    }, [isLoggedIn]);


    return (
        <>
            <div className="Navbar__nav-container">
                <div className="Navbar__nav-left">
                    <li>UBFC</li>
                </div>
                <div className="Navbar__nav-right">
                    <li>Dashboard</li>
                    {!authCtx.isLogin && <li>Login</li>}
                    {authCtx.isLogin && <li>Logout</li>}
                </div>
            </div>
        </>
    );
}