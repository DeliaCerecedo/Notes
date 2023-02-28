// import logo from './logo.svg';
// import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/config";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { Login } from "./views/Login";
import { Wall } from "./views/Wall";
import { Write } from "./views/Write";
import { Edit } from "./views/Edit";
import NotFound from "./views/NotFound";
// import ContadorHooks from './components/pruebas/ContadorHooks';
// import ScrollHooks from './components/pruebas/ContadorHooks'
// import RelojHooks from './components/pruebas/RelojHooks';

 


function App() {

  const [getIdToEdit, setGetIdToEdit] = useState('');

  const [user, setUser] = useState(null);
  
  const auth = getAuth();

  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      setUser(userAuth)
    } else {
      setUser(null)
    }
  });

//  const initialNote = {
//     titulo: "",
//     contenido: "",
//   }; 

//   const [userNote, setUserNote] = useState(initialNote);

//   const captureInputNote = (e) => {
//    console.log(e);
//     const { name, value } = e.target;
//     setUserNote({ ...userNote, [name]: value });
//   };


  function setUserNull() {
    setUser(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="/wall" element={user?<Wall logOut={setUserNull}/> : <Login setUser={setUser} setGetIdToEdit={setGetIdToEdit}/>}/>
        <Route path="/write" element={<Write logOut={setUserNull}  setGetIdToEdit={setGetIdToEdit}/>} />
        <Route path="/edit/:id" element={<Edit logOut={setUserNull}  setGetIdToEdit={setGetIdToEdit}  getIdToEdit={getIdToEdit}/>} />
        <Route path="*" element={<NotFound />} />
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
