import React from 'react';
import exit from "../../images/exit.png";
import header from "../../images/header.png";
import agregar_nota from "../../images/agregar_nota.png";

export function Wall() {
  return(
    <div className='backgroundExterior'>
      <div className='backgroundInterior'>
        <header>
          <img src={exit} className="exit" alt="imagen de salir o cerrar sesión"/>
          <img src={header} className="logo" alt="imagen del header"/>
        </header>
        <main>
          <p  className='mensaje'>Delia agrega, modifIca o borra  una nota</p>
          <img src={agregar_nota} className="agregar_nota" alt="imagen para agregar una nota"/>
        </main>
      </div>     
    </div>

  );
}