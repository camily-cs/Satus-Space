import React from "react";
import NavBar from "../../components/Header/NavBar";
import MainHomepage from "../../components/MainHome";
import SectionHomepage from "../../components/SectionHome";
import Footer from "../../components/Footer/index.jsx";

import logo from "../../assets/image/logoAzul.png";
import fonte from "../../assets/image/fonteAzul.png"

/*CSS da página*/
import "./style.css";

function Index(){


    const temaBg = {
        backgroundColor:  "var(--bgcolor4)",
        color:  "black"
    }


    return (
        <div>
            <main className="upperPart">  <NavBar/> <MainHomepage/>   </main>            
            <SectionHomepage/>
            <div className="background-index"></div>
            <Footer

                styleComponent={temaBg}
                fonte = {fonte}
                logo = {logo}


            />           
        </div>
    )
}

export default Index;