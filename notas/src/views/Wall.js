// import { logOutFirebase } from "../firebase/auth";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from "../firebase/config";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { Exit } from "../components/Exit";

import agregar_nota from "../images/agregar_nota.png";
// import editar_nota from "../images/editar_nota.png";
// import borrar_nota from "../images/borrar_nota.png";

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
            {noteList.map((newNoteList) => (
              <div className="containerNote" key={newNoteList.id}>
                {/* <div className="títuloInWall"> */}
                <p className="títuloInWall">{newNoteList.título}</p>
                {/* </div> */}

                <p className="textAreaInWall">{newNoteList.contenido}</p>

                {/* <textarea */}
                  {/* className="textAreaInWall"
                  value={newNoteList.contenido}
                  readOnly */}
                {/* /> */}

                <button className="buttonEdit"></button>

                <button
                  className="buttonDelete"
                  onClick={() => delateNote(newNoteList.id)}
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
