import React from 'react';
import header from "../../images/header.png";
import libreta_feliz from "../../images/libreta_feliz.png";
import btn_google from "../../images/btn_google.png";

export function Login() {
  return(
    <div className='backgroundExterior'>
      <div className='backgroundInterior'>
        <header>
          <img src={header} className="logo" alt="imagen del header"/>
        </header>
        <main>
          <p  className='mensaje'>Para agregar tus notas, crea una cuenta o inicia sesión haciendo click en el botón</p>
          <img src={libreta_feliz} className="libreta_feliz" alt="libreta feliz"/>
          <img src={btn_google} className="btn_google" alt="botón de google para iniciar sesión"/>
        </main>
        <footer>
          <p className='footer'>Created by Delia Díaz for Laboratoria - 2022</p>
        </footer>
      </div>     
    </div>

  );
}