import React from "react";
import NavBarLogo from "../components/header/NavBarLogo";
import LoginForms from "../components/forms/LoginForms";

function Login(){
    return(
        <>
            <main className="upperPart">
                <NavBarLogo/>
                <LoginForms/>
            </main>
        </>
    )
}

export default Login;