import { logOutFirebase } from '../firebase/auth';

import React from "react";

import exit from "../images/exit.png";
import back from "../images/back.png";
import header from "../images/header.png";
import palomita from "../images/palomita.png";


export function Edit() {
  const buttonExit = () => {
    logOutFirebase();
    console.log("ya salí");
  }

  return (
    <div className="backgroundExterior">
      <div className="backgroundInterior">
        <header>
          <img
            src={back}
            className="back"
            alt="imagen de una flecha para regresar"
          />
          <button onClick={()=>buttonExit()}>Exit</button>
          <img
            src={exit}
            className="exit"
            alt="imagen de salir o cerrar sesión"
          />
          <img src={header} className="logo" alt="imagen del header" />
        </header>
        <main>
          <p className="mensaje">
            Delia EDITA TU nota para que no la pierdas o la olvides
          </p>
          <div className="backgroundNota">
            <div className="contanedorhijo">
              <input type="text" placeholder='Título' className="título"/>
              <input type="text" placeholder='Contenido' className="contenido"/>
              <img src={palomita} className="palomita" alt="imagen  de una palomita para agregar una nota"/>
            </div>
          </div>
        </main>
        <footer>
          <p className='footer'>Created by Delia Díaz for Laboratoria - 2022</p>
        </footer>
      </div>
    </div>
  );
}
