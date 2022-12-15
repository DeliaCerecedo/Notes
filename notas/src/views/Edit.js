import { logOutFirebase } from "../firebase/auth";

import { useState } from "react";

import { Back } from "../components/Back";
import { Exit } from "../components/Exit";
import { HeaderAndBackground } from "../components/HeaderAndBackground";
import { NoteTemplate } from "../components/NoteTemplate";

export function Edit({ logOut }) {
  
  

  

 
  return (
    <>
      <header>
        <HeaderAndBackground />
        <Back />
        <Exit />
      </header>
      <main>
        <p className="mensaje">
          Delia EDITA tu nota para que no la pierdas o la olvides
        </p>
        <NoteTemplate />
      </main>
      <footer>
        <p className="footer">Created by Delia Díaz for Laboratoria - 2022</p>
      </footer>
    </>
  );
}

