import { logOutFirebase } from "../firebase/auth";

import { useNavigate } from "react-router-dom";

import exit from "../images/exit.png";
import header from "../images/header.png";
import agregar_nota from "../images/agregar_nota.png";

export function Wall({logOut}) {
  const navigate = useNavigate();
  const logOutApp = logOut;

  const buttonExit = async () => {
    await logOutFirebase();
    logOutApp();
    navigate("/");
    console.log("ya salí");
  };

  const buttonAddNote = () => {
    navigate("/write");
  }

  return (
    <div className="backgroundExterior">
      <div className="backgroundInterior">
        <header>
          {/* <button onClick={()=>buttonExit()}>Exit</button> */}
          <img
            src={exit}
            onClick={() => buttonExit()}
            className="exit"
            alt="imagen de salir o cerrar sesión"
          />
          <img src={header} className="logo" alt="imagen del header" />
        </header>
        <main>
          <p className="mensaje">Delia estas son todas tus notas</p>
          <img
            src={agregar_nota}
            onClick={() => buttonAddNote()}
            className="agregar_nota"
            alt="imagen para agregar una nota"
          />
        </main>
      </div>
    </div>
  );
}
