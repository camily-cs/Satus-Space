import React from "react";
import Nav from "../components/nav/Nav";
import MainHomepage from "../components/main-homepage/Main-homepage";
import SectionHomepage from "../components/section-homepage/Section-homepage";
import Footer from "../components/footer/Footer";

function Index(){
    return (
        <div>
            <main className="upperPart">  <Nav/> <MainHomepage/>   </main>


            <SectionHomepage/>
            <Footer/>
            
        </div>
    )
}

export default Index;