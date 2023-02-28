import React from "react";
import { logOutFirebase } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import exit from "../images/exit.png";

export function Exit({logOut}) {

  const navigate = useNavigate();
  const logOutApp = logOut;

  const buttonExit = async () => {
    await logOutFirebase();
    logOutApp();
    navigate("/");
    console.log("ya salí");
  };

  return(
    <>
      <img src={exit} onClick={()=>buttonExit()} className="exit" alt="imagen de salir o cerrar sesión"/>
    </>
  );
} 

