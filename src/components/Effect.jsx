import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Reloj({ hora }) {
  useEffect(() => {
    console.log("Montado");
    return () => {
      console.log("Desmontado");
    };
  }, []);
  return <h3>{hora}</h3>;
}

function Effect() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        console.log("Actualizado");
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <div>
      <h2>Effect</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>ocultar</button>
    </div>
  );
}

export default Effect;
