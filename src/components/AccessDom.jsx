import { useRef, useEffect, useState } from "react";

const AccessDom = () => {
  const divRef = useRef();
  const [ancho, setAncho] = useState(0);

  useEffect(() => {
    const actualizarAncho = () => {
      if (divRef.current) {
        setAncho(divRef.current.offsetWidth);
      }
    };

    actualizarAncho();
    window.addEventListener("resize", actualizarAncho);

    return () => window.removeEventListener("resize", actualizarAncho);
  }, []);

  return (
    <div>
      <h2>useRef</h2>
      <div ref={divRef} style={{ backgroundColor: "lightgray" }}>
        Este div tiene un ancho de {ancho}px
      </div>
    </div>
  );
};

export default AccessDom;
