import exit from "../images/exit.png";


export function Exit({buttonExit}) {
  return(
    <>
      <img src={exit} onClick={()=>buttonExit()} className="exit" alt="imagen de salir o cerrar sesión"/>
    </>
  );
}

