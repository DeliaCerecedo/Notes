import { logOutFirebase } from "../firebase/auth";
import { collection, setDoc , doc, deleteDoc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import palomita from "../images/palomita.png";

export function Edit({ logOut, userNote, setUserNote }) {
  const navigate = useNavigate();
  
  const [note, setNote] = useState({
      titulo: "",
      contenido: "",
  });

  const {id} = useParams();

  const captureInputNote = (e) => {
   // console.log(e);
   const { name, value } = e.target;
   setNote({ ...note, [name]: value });
  };

 // función para guardar o actualizar datos
 const saveNoteInFirebase = async (e) => {
  e.preventDefault();
  if(note.titulo!=='' && note.contenido!==''){
    try {
      await setDoc(doc(db, "notes", id),{
          ...note
        })
      setNote({
        titulo: "",
        contenido: "",
    }); //para resetear los datos ingresados en la nota y que no se quede grabado en el template
    } catch (error) {
      console.log(error)
    }
    navigate("/wall");
  }else {
    alert ("no puedes guardar notas vacías");
  }
  // console.log(userNote);
};

useEffect(() => {
  const getNoteToEdit = () => {  //petición al servidor

      const docRef = doc(db, "notes", id)
      return getDoc(docRef)
  }
  getNoteToEdit().then(result => {
      setNote(result.data())
  })
  }, [id])  //aquí se va a renderizar, siempre y cuando subId tenga contenio, cambios. 
  // console.log(note)



  // const getNoteToEdit = async () => {
  //   console.log(id)
  //   try {
  //    const docRef = doc(db, "notes", id)
  //    const docSnap = await getDoc(docRef)
  //     console.log(docSnap.data())
  //    setNote(docSnap.data())
 
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // // función para saber si se va a renderizar la petición para actualizar o no 
  // useEffect(() => {
  //   getNoteToEdit()
  // },[])

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
