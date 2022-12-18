// import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { Exit } from "../components/Exit";

import agregar_nota from "../images/agregar_nota.png";
import editar_nota from "../images/editar_nota.png";
import borrar_nota from "../images/borrar_nota.png";

export function Wall({ logOut }) {
  const navigate = useNavigate();

  const buttonAddNote = () => {
    navigate("/write");
  };

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

  const delateNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    const newNote = [...noteList.filter((item) => item.id !== id)];
    setNoteList(newNote);
  };

  const editNote = () => {
    navigate("/edit");
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
                {/* <div className="tituloInWall"> */}
                <p className="tituloInWall">{newNote.titulo}</p>
                {/* </div> */}

                <p className="textAreaInWall">{newNote.contenido}</p>

                <button className="buttonEdit">
                  <img
                    src={editar_nota}
                    onClick={() => editNote()}
                    className="editar_nota"
                    alt="imagen para editar una nota"
                  />
                </button>
                  
                <button  className="buttonDelete">
                  <img
                    src={borrar_nota}
                    onClick={() => delateNote(newNote.id)}
                    className="borrar_nota"
                    alt="imagen para borrar una nota"
                  />
                </button>
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
