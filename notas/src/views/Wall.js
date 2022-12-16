// import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { Exit } from "../components/Exit";
import { Edit } from "./Edit";

import agregar_nota from "../images/agregar_nota.png";
// import editar_nota from "../images/editar_nota.png";
// import borrar_nota from "../images/borrar_nota.png";

export function Wall({ logOut, setUserNote }) {
  const navigate = useNavigate();

  const buttonAddNote = () => {
    navigate("/write");
  };

  const edit = (id) => {
    navigate("/edit/"+ id)
  }

  const [noteList, setNoteList] = useState([]);

  // función para renderizar la lista de notas

  useEffect(() => {
    const getNoteList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "notes"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoteList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getNoteList();
  }, []);

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    const newNote = [...noteList.filter((item) => item.id !== id)];
    setNoteList(newNote);
  };


  return (
    <>
      <header>
        <HeaderAndBackground />
        <Exit logOut={logOut} />
      </header>
      <main>
        <p className="mensaje">Delia estas son todas tus notas</p>

        {/* <div className="containerFather"> */}
          <div className="containerFather">
            {noteList.map((newNote) => (
              <div className="containerNote" key={newNote.id}>
                {/* <div className="títuloInWall"> */}
                <p className="títuloInWall">{newNote.titulo}</p>
                {/* </div> */}

                <p className="textAreaInWall">{newNote.contenido}</p>

                {/* <textarea */}
                  {/* className="textAreaInWall"
                  value={newNoteList.contenido}
                  readOnly */}
                {/* /> */}
                {/* <Edit /> */}
                {/* <button className="buttonEdit" onClick={() =>setNoteIdToEdit(newNote.id)} ></button> */}
                <button className="buttonEdit" onClick={() => edit(newNote.id)}></button>
                <button
                  className="buttonDelete"
                  onClick={() => deleteNote(newNote.id)}
                ></button>
              </div>
            ))}
          </div>
        {/* </div> */}

        <img
          src={agregar_nota}
          onClick={() => buttonAddNote()}
          className="agregar_nota"
          alt="imagen para agregar una nota"
        />
      </main>
    </>
  );
}
