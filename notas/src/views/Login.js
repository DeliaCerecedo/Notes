import { googleAuth } from "../firebase/auth";

import React from "react";
import { useNavigate } from "react-router-dom";

// import header from "../images/header.png";
import libreta_feliz from "../images/libreta_feliz.png";
import btn_google from "../images/btn_google.png";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { Footer } from "../components/Footer";

export function Login({ setUser }) {
  const navigate = useNavigate();

  // console.log(props);

  const buttonLogin = () => {
    const userAuth = googleAuth();
    userAuth
      .then((user) => {
        setUser(user);
       // console.log(user.displayName, user.email);
        navigate("/wall");
      })
      .catch((error) => {
        console.log(error);
      });
     

    console.log("ya quedó");
  };

  

  return (
    <>
      <header>
        <HeaderAndBackground />
      </header>
      <main>
        <p className="mensaje">
          Para agregar tus notas, crea una cuenta o inicia sesión haciendo click
          en el botón
        </p>
        <img
          src={libreta_feliz}
          className="libreta_feliz"
          alt="libreta feliz"
        />
        <img
          src={btn_google}
          onClick={() => buttonLogin()}
          className="btn_google"
          alt="botón de google para iniciar sesión"
        />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
 