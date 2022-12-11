// import logo from './logo.svg';
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/config";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import { Login } from "./views/Login";
import { Wall } from "./views/Wall";
import { WriteOrEdit } from "./views/WriteOrEdit";
// import { Edit } from "./views/Edit";
import NotFound from "./views/NotFound";
// import ContadorHooks from './components/pruebas/ContadorHooks';
// import ScrollHooks from './components/pruebas/ContadorHooks'
// import RelojHooks from './components/pruebas/RelojHooks';

function App() {
  useEffect(() => {
    const getData = async () => {
      const saveData = await getDocs(collection, (db, "user"));
      console.log(saveData);
    };
    getData();
  }, []);

  const [user, setUser] = useState(null);
  

  function setUserNull() {
    setUser(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="/wall" element={user?<Wall logOut={setUserNull}/> : <Login setUser={setUser}/>}/>
        <Route path="/write" element={<WriteOrEdit logOut={setUserNull}/>} />
        {/* <Route path="/edit" element={<Edit logOut={setUserNull}/>} /> */}
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
