import React from "react";
import NavBar from "../../components/Header/NavBar";
import MainHomepage from "../../components/MainHome";
import SectionHomepage from "../../components/SectionHome";
import Footer from "../../components/Footer/index.jsx";
import "../../css/App.css"

function Index(){
    return (
        <div>
            <main className="upperPart">  <NavBar/> <MainHomepage/>   </main>            
            <SectionHomepage/>
            {/* <div className="red"> */}
            <Footer/>            
        </div>
    )
}

export default Index;