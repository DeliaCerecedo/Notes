import { useNavigate } from "react-router-dom";

import back from "../images/back.png";

export function Back() {
  
  const navigate = useNavigate();

  const buttonBack = () => {
    navigate("/wall");
  };

  return (
    <>
      <img
        src={back}
        onClick={() => buttonBack()}
        className="back"
        alt="imagen de salir o cerrar sesión"
      />
    </>
  );
}
