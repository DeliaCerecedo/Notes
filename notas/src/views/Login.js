import { googleAuth } from '../firebase/auth';

import { useNavigate } from "react-router-dom";


import header from "../images/header.png";
import libreta_feliz from "../images/libreta_feliz.png";
import btn_google from "../images/btn_google.png";


export function Login(props) {

  const navigate = useNavigate();
  const { setUser } = props;
  console.log(props);

  const buttonLogin = () => {
    const userPromise = googleAuth();
    userPromise.then((user) =>{
      setUser(user);
      navigate("/wall");
    }).catch((error)=>{
      console.log(error)
    })
    
    console.log("ya quedó");
  };


  return(
    <div className='backgroundExterior'>
      <div className='backgroundInterior'>
        <header>
          <img src={header} className="logo" alt="imagen del header"/>
        </header>
        <main>
          <p  className='mensaje'>Para agregar tus notas, crea una cuenta o inicia sesión haciendo click en el botón</p>
          <img src={libreta_feliz} className="libreta_feliz" alt="libreta feliz"/>
          {/* <button type="button" onClick={()=>buttonLogin()}><img src={btn_google} className="btn_google" alt="botón de google para iniciar sesión"/></button> */}
          <img src={btn_google} onClick={()=>buttonLogin()} className="btn_google" alt="botón de google para iniciar sesión"/>
        </main>
        <footer>
          <p className='footer'>Created by Delia Díaz for Laboratoria - 2022</p>
        </footer>
      </div>     
    </div>

  );
}