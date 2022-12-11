import palomita from "../images/palomita.png";

export function NotaToWritOrEdit({buttonAddNote}) {
  return (
    <div className="backgroundNota">
      <form className="contanedorForm">
        <input
          type="text"
          placeholder="Título"
          className="título"
          id="título"
        />
        <input
          type="text"
          placeholder="Contenido"
          className="contenido"
          id="contenido"
        />
          <img
            src={palomita}
            onClick={()=>buttonAddNote()}
            className="palomita"
            alt="imagen  de una palomita para agregar una nota"
          />
      </form>
    </div>
  );
}
