import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useState, useEffect  } from "react";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { NoteTemplate } from "../components/NoteTemplate";
import { useParams } from "react-router-dom";
const initialNote = {
  título: "",
  contenido: "",
};

export function Edit({ logOut }) {
 
  
  const [userNote, setUserNote] = useState(initialNote);

  const [noteIdToEdit, setNoteIdToEdit] = useState('');
  const{noteId}=useParams();
console.log(noteId)
  const getNoteToEdit = async (id) => {
    try {
     const docRef = doc(db, "notes", id)
     const docSnap = await getDoc(docRef)
     setUserNote(docSnap.data()) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(noteIdToEdit !== '') {
      getNoteToEdit(noteIdToEdit)
    }
  },[noteIdToEdit])





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
        {/* <button className="buttonEdit"></button> */}
        {/* <button className="buttonEdit" onClick={() =>setNoteIdToEdit(newNote.id)} ></button> */}
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}

