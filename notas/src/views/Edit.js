import { logOutFirebase } from "../firebase/auth";

import { useNavigate } from "react-router-dom";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";


export function Edit({ logOut }) {
  const navigate = useNavigate();



  const buttonAddNote = () => {
    navigate("/wall");
  };

  return (
    <>
      <header>
        <HeaderAndBackground />
        <Back />
        <Exit logOut={logOut} />
      </header>
      <main>
        <p className="mensaje">
          Delia EDITA tu nota para que no la pierdas o la olvides
        </p>
        {/* <NotaToWritOrEdit buttonAddNote={() => buttonAddNote()}/> */}
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}

