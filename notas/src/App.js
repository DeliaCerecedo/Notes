// import logo from './logo.svg';
import {collection, getDocs} from "firebase/firestore";
import db from "./firebase/config";


import { useEffect } from 'react';

import './App.css';
import {Login} from "./views/Login"
//  import {Wall} from "./views/Wall"
 //import {EditOrWrite} from "./views/EditOrWrite"
// import ContadorHooks from './components/pruebas/ContadorHooks';
// import ScrollHooks from './components/pruebas/ContadorHooks'
// import RelojHooks from './components/pruebas/RelojHooks';

function App() {
  useEffect(()=>{
    const getData = async () => {
      const saveData = await getDocs (collection, (db, "user"));
      console.log(saveData);
    }
    getData();
  },[]);

  // const [user, setUser] = useState(null);

  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Login/>
      {/* <Wall/> */}
      {/* <EditOrWrite/> */}
      {/* <ContadorHooks título= "Seguidores"/> */}
      {/* <ScrollHooks/> */}
      {/* <RelojHooks/> */}
    </div>
  );
}

export default App;
