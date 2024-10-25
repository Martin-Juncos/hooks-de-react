import { useState } from "react";

function State() {
  const [texto, setTexto] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });
  const handleTexto = (e) => {
    const propiedad = e.target.name;
    const valor = e.target.value;
    setTexto({
      ...texto,
      [propiedad]: valor,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2>UseState</h2>
        <div>
          <h3>Mostrar/Ocultar</h3>
          <button onClick={() => setIsVisible(!isVisible)}>Toogle</button>
          {isVisible && <p>Es visible</p>}
        </div>
        <div>
          <h3>Contador</h3>
          {count}
          <br />
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div>
          <h3>Imput Controlado</h3>
          {/* Muestra cada propiedad del objeto texto */}
          <p>Nombre: {texto.nombre}</p>
          <p>Apellido: {texto.apellido}</p>
          <p>Edad: {texto.edad}</p>
          <br />
          <input
            onChange={handleTexto}
            type="text"
            name="nombre"
            value={texto.nombre}
          />
          <input
            onChange={handleTexto}
            type="text"
            name="apellido"
            value={texto.apellido}
          />
          <input
            onChange={handleTexto}
            type="text"
            name="edad"
            value={texto.edad}
          />
        </div>
      </div>
    </>
  );
}

export default State;
