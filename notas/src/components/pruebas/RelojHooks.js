// import React, {useEffect, useState} from "react";

// function Reloj ({hour}) {
//   return <h3>{hour}</h3>
// }

// export default function RelojHooks() {
  
//   const [hour, setHour] = useState(new Date.toLocaleTimeString());
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     let temporizador;
// if(visible){
//   temporizador = setInterval(() => {
//     setHour(new Date.toLocaleTimeString());
//   }, 1000);
// }else{
//   clearInterval(temporizador)

//   return () => {
//     console.log("fase de desmontaje")
//   }

// }

//   },[visible]);

//   return (
//     <>
//     <h2>Reloj con Hooks</h2>
//     {visible && <Reloj hour={hour}/>}
//     <button onClick={() => setVisible(true)}></button>
//     <button onClick={() => setVisible(false)}></button>
//     </>
    
  
//   );

// }