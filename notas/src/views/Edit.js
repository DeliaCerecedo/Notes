import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import palomita from "../images/palomita.png";

export function Edit({ logOut, userNote, setUserNote, getIdToEdit, captureInputNote, saveNoteInFirebase }) {
  const navigate = useNavigate();
  
  const [note, setNote] = useState({
      titulo: "",
      contenido: "",
  });

  const {id} = useParams();

  const buttonAddNote = () => {
    navigate("/wall");
  };

  const getNoteToEdit = async () => {
    console.log(id)
    try {
     const docRef = doc(db, "notes", id)
     const docSnap = await getDoc(docRef)
      console.log(docSnap.data())
     setNote(docSnap.data())
 
    } catch (error) {
      console.log(error)
    }
  }

  // función para saber si se va a renderizar la petición para actualizar o no 
  useEffect(() => {
    getNoteToEdit()
  },[])

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
        <div className="backgroundNota">
          <form onSubmit={saveNoteInFirebase}>
            <input
              type="text"
              onChange={captureInputNote}
              value={note.titulo}
              name="titulo"
              placeholder="Título"
              className="titulo"
              id="titulo"
            /> 
            <textarea
              type="text"
              onChange={captureInputNote}
              value={note.contenido}
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
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}
