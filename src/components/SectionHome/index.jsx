import React from "react";
import "./style.css";


function SectionHomepage({styleComponent}){
    return(
        <section className="container-fluid section-index" id="section" style={styleComponent}>
            <div className="">
                <p className="section-text py-5">Somos seres em constante <strong>aprendizado,<br/></strong> não tenha medo de <strong>começar</strong> algo novo </p>

                <div className="mx-auto section-circle my-4">
                    <div>
                        <span>A tecnologia está sempre mudando, mude junto a ela.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHomepage;