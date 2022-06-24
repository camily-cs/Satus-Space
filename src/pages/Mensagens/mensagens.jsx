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
       
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="container">
<div class="row clearfix">
    <div class="col-md-12 ">
        <div class="card chat-app">
            <div id="plist" class="people-list">
                <div class="input-group">
                        <a>Chats</a>
                        <p><FiSearch/></p>
                </div>
                <ul class="list-unstyled chat-list mt-4 mb-4">
                    <li class="clearfix">
                        <img src="https://play-lh.googleusercontent.com/lvUW3XukTSHnop1wGHVO1cn2EMwoEa2ZfjBhpIt0t1MhjWXa319OUHJ4zzzhdzf6Vis" alt="avatar"/>
                        <div class="about">
                            <div class="name">Oracle</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> Você: Ok, Obrigado! </div>                                            
                        </div>
                    </li>
                    <li class="clearfix ">
                        <img src="https://media.glassdoor.com/sqll/2482923/banco-bmg-squareLogo-1617284441479.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Banco BMG</div>
                            <div class="status"> <i class="fa fa-circle online"></i> Você: Ok, Obrigado! </div>
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar"/>
                        <div class="about">
                            <div class="name">Mercado Livre</div>
                            <div class="status"> <i class="fa fa-circle online"></i> Empresa: Boa tarde!... </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://www.itau.com.br/assets/dam/publisher/01_itau/42_landing_pages/new_home/static_banner_cards/328x304_tag_wind_card.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Banco Itaú</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> Empresa: Agradeço a... </div>
                        </div>
                    </li>
                  
                    <li class="clearfix">
                        <img src="https://logodownload.org/wp-content/uploads/2017/03/dell-logo-1.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">DELL</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> Empresa: Sobre sua.. </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://logospng.org/download/porto-seguro/logo-porto-seguro-512.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Porto Seguro</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> Você: Agradeço o ret... </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://static.wixstatic.com/media/4ab449_203b3da6e8314523aee03098b02e2675~mv2.png/v1/fill/w_236,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Ifood.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">iFOOD</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> Empresa: Entrevista no.. </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-12">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img src="https://99prod.s3.amazonaws.com/uploads/678e6c2b-7539-4881-bb6f-22aded41d92f/novo%20logo.JPG" alt="avatar"/>
                            </a>
                            <div class="chat-about">
                                <h5 class="m-b-0">Mercado Livre</h5>
                                <small>Online</small>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                            <div class="message my-message"> Olá, Aurora! Tudo Bem? Sou a Patricia, do grupo ML e gostaria de confirmar sua presença na entrevista de hoje às 15:00. 
                            <div className="message-data my-message">08:34</div>
                            </div>
                        </li>
                        <li class="clearfix">
                            <div class="message other-message float-right"> Olá, Patricia. Tudo bem sim.
                                <div class="message-data other-message">08:35</div>
                            </div>                                
                        </li>                               
                        <li class="clearfix">
                            <div class="message other-message float-right"> Confirmo a presença.Muito obrigada!
                                <div class="message-data other-message">08:35</div  >
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                    <div class="clip">
                        <BsPaperclip />
                    </div>
                        <input type="text" class="form-control" placeholder="Escreva uma mensagem..."/>                              
                        <div class="send">
                            <IoMdSend/>
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