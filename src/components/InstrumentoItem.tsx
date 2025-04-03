import { useState } from "react";

type InstrumentoParams = {
  id: number;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costoEnvio: string;
  cantidadVendida: number;
  descripcion: string;
  stockInicial: boolean;
};

function InstrumentoItem(args: InstrumentoParams) {
  const [count, increaseCount] = useState(args.cantidadVendida);
  const texto = args.stockInicial ? "Comprar" : "Sin stock";
  const btnClass = args.stockInicial
    ? "btn btnCompra"
    : "btn btnNoStock";
  const envios = args.costoEnvio === "G" ? "Envío gratis a todo el país" : `Costos de envío: $ ${args.costoEnvio}`
  const click = () => {
    args.stockInicial ? increaseCount((count) => count + 1) : 0;
  };
  return (
    <>
      <div className="tarjeta">
        <div className="tarjetaHeader">
          <img src={`./img/${args.imagen}`} alt={args.imagen}></img>
        </div>
        <div className="tarjetaBody">
          <h5 className="tarjetaTitulo">{args.instrumento}</h5>
          <p className="tarjetaMarcaModelo">{args.marca} {args.modelo}</p>
          <p className="tarjetaDescripcion">{args.descripcion}</p>
          <p className="tarjetaPrecio">Precio: $ {args.precio}</p>
          <p className="tarjetaCostos">{envios}</p>
          <p className="tarjetaVendidos">{count} Vendidos</p>
          <button onClick={click} className={btnClass}>{texto}</button>
        </div>
      </div>
    </>
  );
}

export default InstrumentoItem;
