import { useState, useEffect } from "react";
import Instrumento from "../entities/Instrumento";
import { getInstrumentosJSON } from "../services/FuncionesApi";
import InstrumentoItem from "./InstrumentoItem";

function Listado() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  // const getInstrumentos = () => {
  //   let datos: Instrumento[] = getInstrumentosJSON();
  //   setInstrumentos(datos);
  // };

  useEffect(() => {
    const getInstrumentos = async () => {
      const res = await fetch("/instrumentos.json");
      const data = await res.json();
      setInstrumentos(data.instrumentos);
    };

    getInstrumentos();
  }, []);

  return (
    <>
      <div className="row">
        {instrumentos.map((instrumento: Instrumento) => (
          <InstrumentoItem
            key={instrumento.id}
            id={instrumento.id}
            instrumento={instrumento.instrumento}
            marca={instrumento.marca}
            modelo={instrumento.modelo}
            imagen={instrumento.imagen}
            precio={instrumento.precio}
            costoEnvio={instrumento.costoEnvio}
            cantidadVendida={instrumento.cantidadVendida}
            descripcion={instrumento.descripcion}
            stockInicial={instrumento.stockInicial}
          ></InstrumentoItem>
        ))}
      </div>
    </>
  );
}

export default Listado;
