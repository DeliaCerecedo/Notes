import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useState, useEffect  } from "react";


import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { NoteTemplate } from "../components/NoteTemplate";
import { useParams } from "react-router-dom";


export function Edit({ logOut, noteList, setUserNote, userNote, captureInputNote, saveNoteInFirebase }) {
 
  
  
  // const [userNote, setUserNote] = useState(initialNote);

  

  const{noteId}=useParams();
  console.log(noteId)
  const [noteIdToEdit, setNoteIdToEdit] = useState(noteId);
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
        
         <NoteTemplate saveNoteInFirebase={saveNoteInFirebase} userNote={userNote} captureInputNote={captureInputNote}/>
            
        
      
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}

