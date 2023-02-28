import React from "react";
// import { logOutFirebase } from "../firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import db from "../firebase/config.js";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
// import { NoteTemplate } from "../components/NoteTemplate";
import { Footer } from "../components/Footer";
import palomita from "../images/palomita.png";

export function Write({ logOut  }) {
  const navigate = useNavigate();



  const [userNote, setUserNote] = useState({
    titulo: "",
    contenido: "",
  });

  const captureInputNote = (e) => {
   // console.log(e);
    const { name, value } = e.target;
    setUserNote({ ...userNote, [name]: value });
  };


  // función para guardar o actualizar datos
  const saveNoteInFirebase = async (e) => {
    e.preventDefault();
    if(userNote.titulo!=='' && userNote.contenido!==''){

      // if(getIdToEdit === '') {
        try {
          await addDoc(collection(db, "notes"), {
            ...userNote,
          });
        } catch (error) {
          console.log(error)
        }
      // }else {
        // await setDoc(doc(db, "notes", getIdToEdit), {
        //   ...userNote
        // })
      // }
      // setUserNote({ ...initialNote }); //para resetear los datos ingresados en la nota y que no se quede grabado en el template
      // setGetIdToEdit('');
      navigate("/wall");

    }else {
      alert ("no puedes guardar notas vacías");
    }
    // console.log(userNote);
   
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
          Delia ESCRIBE una nota para que no la pierdas o la olvides
        </p>
        {/* <NoteTemplate saveNoteInFirebase={saveNoteInFirebase} userNote={userNote} captureInputNote={captureInputNote}/> */}
        <div className="backgroundNota">
          <form onSubmit={saveNoteInFirebase}>
            <input
              type="text"
              onChange={captureInputNote}
              value={userNote.titulo}
              name="titulo"
              placeholder="Título"
              className="titulo"
              id="titulo"
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
