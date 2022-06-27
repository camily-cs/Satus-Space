import React from "react";
import ReactPlayer from "react-player";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BiBookAlt } from "react-icons/bi";

export default function ResponsivePlayer() {
  return (
    <>
      <h1 className="title-page"><div className="arrow-back"><IoIosArrowBack /></div>  Introdução a Algoritmos</h1>
      <div className='player-wrapper'>
        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=8mei6uVttho' width='60%' height='70%' controls={true} />
      </div>
      <div className="video-selector">
        <h2 className="title-selector">Conteúdo do Curso </h2>
        <div className="content-selector">
          <p className="written-content"><div className="book"><BiBookAlt /></div> Material das aulas</p>
        </div>
      </div>
    </>
  );
}

