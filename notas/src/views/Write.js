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
import { NoteTemplate } from "../components/NoteTemplate";
import { Footer } from "../components/Footer";
import palomita from "../images/palomita.png";

export function Write({ logOut, userNote, setUserNote, initialNote, captureInputNote }) {
  const navigate = useNavigate();

  const saveNoteInFirebase = async (e) => {
    e.preventDefault();
    if(userNote.titulo !=='' && userNote.contenido!==''){
      try {
        await addDoc(collection(db, "notes"), {
          ...userNote,
        });
      } catch (error) {
        console.log(error)
      }
      setUserNote({ ...initialNote }); //para resetear los datos ingresados en la nota y que no se quede grabado en el template
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
        <NoteTemplate saveNoteInFirebase={saveNoteInFirebase} userNote={userNote} captureInputNote={captureInputNote}/>
        {/* <div className="backgroundNota">
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
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
