import React from "react";
import "./style.css";
import Sidebar from "../../components/SideBar";
import { IoMdSend } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BsPaperclip } from "react-icons/bs";
import SearchBar from "../../components/SearchBar";



function Mensagens() {
    return(
        <>
        <SearchBar />
       
        <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row clearfix">
      <div className="col-md-12 ">
        <div className="card chat-app">
          <div id="plist" className="people-list">
            <div className="input-group">
              <a>Chats</a>
              <p><fisearch /></p>
            </div>
            <ul className="list-unstyled chat-list mb-4">
              <li className="clearfix">
                <img src="https://play-lh.googleusercontent.com/lvUW3XukTSHnop1wGHVO1cn2EMwoEa2ZfjBhpIt0t1MhjWXa319OUHJ4zzzhdzf6Vis" alt="avatar" />
                <div className="about">
                  <div className="name">Oracle</div>
                  <div className="status"> <i className="fa fa-circle offline" /> Você: Ok, Obrigado! </div>                                            
                </div>
              </li>
              <li className="clearfix ">
                <img src="https://media.glassdoor.com/sqll/2482923/banco-bmg-squareLogo-1617284441479.png" alt="avatar" />
                <div className="about">
                  <div className="name">Banco BMG</div>
                  <div className="status"> <i className="fa fa-circle online" /> Você: Ok, Obrigado! </div>
                </div>
              </li>
              <li className="clearfix active">
                <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar" />
                <div className="about">
                  <div className="name">Mercado Livre</div>
                  <div className="status"> <i className="fa fa-circle online" /> Empresa: Boa tarde!... </div>
                </div>
              </li>                                    
              <li className="clearfix">
                <img src="https://www.itau.com.br/assets/dam/publisher/01_itau/42_landing_pages/new_home/static_banner_cards/328x304_tag_wind_card.png" alt="avatar" />
                <div className="about">
                  <div className="name">Banco Itaú</div>
                  <div className="status"> <i className="fa fa-circle offline" /> Empresa: Agradeço a... </div>
                </div>
              </li>
              <li className="clearfix">
                <img src="https://logodownload.org/wp-content/uploads/2017/03/dell-logo-1.png" alt="avatar" />
                <div className="about">
                  <div className="name">DELL</div>
                  <div className="status"> <i className="fa fa-circle offline" /> Empresa: Sobre sua.. </div>
                </div>
              </li>
              <li className="clearfix">
                <img src="https://logospng.org/download/porto-seguro/logo-porto-seguro-512.png" alt="avatar" />
                <div className="about">
                  <div className="name">Porto Seguro</div>
                  <div className="status"> <i className="fa fa-circle offline" /> Você: Agradeço o ret... </div>
                </div>
              </li>
              <li className="clearfix">
                <img src="https://static.wixstatic.com/media/4ab449_203b3da6e8314523aee03098b02e2675~mv2.png/v1/fill/w_236,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Ifood.png" alt="avatar" />
                <div className="about">
                  <div className="name">iFOOD</div>
                  <div className="status"> <i className="fa fa-circle offline" /> Empresa: Entrevista no.. </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="chat">
            <div className="chat-header clearfix">
              <div className="row">
                <div className="col-lg-12">
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                    <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar" />
                  </a>
                  <div className="chat-about">
                    <h5 className="m-b-0">Mercado Livre</h5>
                    <small>Online</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-history">
              <ul className="m-b-0">
                <li className="clearfix-other">
                  <div className="message my-message"> Olá, Aurora! Tudo Bem? Sou a Patricia, do grupo ML e gostaria de confirmar sua presença na entrevista de hoje às 15:00. 
                    <div classname="message-data my-message">08:34</div>
                  </div>
                </li>
                <li className="clearfix-my">
                  <div className="message other-message "> Olá, Patricia. Tudo bem sim.
                    <div className="message-data other-message">08:35</div>
                  </div>                                
                </li>                               
                <li className="clearfix-my">
                  <div className="message other-message "> Confirmo a presença.Muito obrigada!
                    <div className="message-data other-message">08:35</div>
                  </div>
                </li>
                
              </ul>
            </div>
            <div className="chat-message clearfix">
              <div className="input-group mb-0">
                <div className="clip">
                  <BsPaperclip />
                  </div>
                <input type="text" className="form-control" placeholder="Escreva uma mensagem..." />                              
                <div className="send">
                  <IoMdSend/>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Mensagens;