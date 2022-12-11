import back from "../images/back.png";

export function Back({buttonBack}) {
  return(
    <> 
      <img src={back} onClick={()=>buttonBack()} className="back" alt="imagen de salir o cerrar sesión"/>
    </>
  );
}