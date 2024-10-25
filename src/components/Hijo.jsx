import { useContext } from "react";
import { userContexto } from "./Contexto";

function Hijo() {
  const usuario = useContext(userContexto);
  return (
    <div>
      <h2>Hijo</h2>
      {usuario && <p>Hola {usuario.nombre} </p>}
    </div>
  );
}

export default Hijo;
