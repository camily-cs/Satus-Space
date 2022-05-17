import React from "react";
import NavBar from "../components/header/NavBar";
import MainHomepage from "../components/main-homepage/Main-homepage";
import SectionHomepage from "../components/section-homepage/Section-homepage";
import Footer from "../components/footer/Footer";

function Index(){
    return (
        <div>
            <main className="upperPart">  <NavBar/> <MainHomepage/>   </main>


            <SectionHomepage/>
            <Footer/>
            
        </div>
    )
}

export default Index;