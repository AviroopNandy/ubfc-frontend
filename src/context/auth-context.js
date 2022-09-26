import React, {useState, useEffect} from "react";
import axios from "axios";

const AuthContext = React.createContext(
    {
        isLogin: false
    }
);

export function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:5000/user/me").then((response)=>{
            // console.log(response);
            setIsLoggedIn(true);
        }).catch((error)=>{
            setIsLoggedIn(false);
            // console.log(error);
        })

    }, []);

    return (
        <AuthContext.Provider value={{isLogin:isLoggedIn}}>{props.children}</AuthContext.Provider>
    );
}


export default AuthContext;