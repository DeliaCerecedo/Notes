import { logOutFirebase } from "../firebase/auth";

import { useNavigate } from "react-router-dom";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { NotaToWritOrEdit } from "../components/NotaToWriteOrEdit";

export function WriteOrEdit({ logOut }) {
  const navigate = useNavigate();

  const buttonExit = async () => {
    await logOutFirebase();
    logOut();
    navigate("/");
    console.log("ya salí");
  };

  const buttonBack = () => {
    navigate("/wall");
  };

  const buttonAddNote = () => {
    navigate("/wall");
  };

  return (
    <>
      <header>
        <HeaderAndBackground />
        <Back buttonBack={() => buttonBack()} />
        <Exit buttonExit={() => buttonExit()} />
      </header>
      <main>
        <p className="mensaje">
          Delia ESCRIBE una nota para que no la pierdas o la olvides
        </p>
        <NotaToWritOrEdit buttonAddNote={() => buttonAddNote()}/>
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}
