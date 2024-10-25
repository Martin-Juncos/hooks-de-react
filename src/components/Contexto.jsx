import React, { useState } from "react";
import Hijo from "./Hijo";

// eslint-disable-next-line react-refresh/only-export-components
export const userContexto = React.createContext();

function Contexto() {
  const [usuario, setUsuario] = useState(null);
  const cambiarLogin = () => {
    if (usuario) {
      setUsuario(null);
    } else {
      setUsuario({
        nombre: "Martin",
      });
    }
  };
  return (
    <div>
      <h2>Contexto</h2>
      <button onClick={cambiarLogin}>Cambiar Login</button>
      <hr />
      <userContexto.Provider value={usuario}>
        <Hijo />
      </userContexto.Provider>
    </div>
  );
}

export default Contexto;
