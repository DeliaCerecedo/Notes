import { logOutFirebase } from "../firebase/auth";

import { useNavigate } from "react-router-dom";
import { Exit } from "../components/Exit";
import header from "../images/header.png";
import agregar_nota from "../images/agregar_nota.png";
import { HeaderAndBackground } from "../components/HeaderAndBackground";

export function Wall({ logOut }) {
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
  };

  return (
    <>
      <header>
        <HeaderAndBackground />
        <Exit buttonExit={() => buttonExit()} />
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
    </>
  );
}
