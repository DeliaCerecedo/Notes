import palomita from "../images/palomita.png";

export function NoteTemplate({saveNoteInFirebase, userNote, captureInputNote}) {
    
  return (
    <div className="backgroundNota">
      <form onSubmit={saveNoteInFirebase}>
        <input
          type="text"
          onChange={captureInputNote}
          value={userNote.título}
          name="título"
          placeholder="Título"
          className="título"
          id="título"
        />
        <textarea
          type="text"
          onChange={captureInputNote}
          value={userNote.contenido}
          name="contenido"
          placeholder="Contenido"
          className="contenido"
          id="contenido"
        />
        <button>
          <img
          src={palomita}
          className="palomita"
          alt="imagen  de una palomita para agregar una nota"
        />
        </button>
        
      </form>
    </div>
  );
}
