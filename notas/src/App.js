// import logo from './logo.svg';
// import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/config";

import { getAuth, onAuthStateChanged } from "firebase/auth";


import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { Login } from "./views/Login";
import { Wall } from "./views/Wall";
import { Write } from "./views/Write";
// import { Edit } from "./views/Edit";
import NotFound from "./views/NotFound";
// import ContadorHooks from './components/pruebas/ContadorHooks';
// import ScrollHooks from './components/pruebas/ContadorHooks'
// import RelojHooks from './components/pruebas/RelojHooks';

function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const saveData = await getDocs(collection, (db, "user"));
  //     console.log(saveData);
  //   };
  //   getData();
  // }, []);

  
  const initialNote = {
    titulo: "",
    contenido: "",
  };

  const [user, setUser] = useState(null);

  const [userNote, setUserNote] = useState(initialNote);

  
  const auth = getAuth();

  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      setUser(userAuth)
    } else {
      setUser(null)
    }
  });


  function setUserNull() {
    setUser(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="/wall" element={user?<Wall logOut={setUserNull} setUserNote={setUserNote}/> : <Login setUser={setUser} />}/>
        <Route path="/write" element={<Write logOut={setUserNull} userNote={userNote} setUserNote={setUserNote} initialNote={initialNote}/>} />
        {/* <Route path="/edit" element={<Edit logOut={setUserNull}/>} /> */}
        <Route path="*" element={<NotFound logOut={setUserNull}/>} />
      </Routes>

     
      {/* <Login/>
      <Wall/>
      <Write/>
      <Edit/> */}
      {/* <ContadorHooks título= "Seguidores"/> */}
      {/* <ScrollHooks/> */}
      {/* <RelojHooks/> */}
    </div>
  );
}

export default App;
