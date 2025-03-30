import React, { useEffect, useState } from "react";
import Card from "./Card";

const Descuentos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [descuento, setDescuento] = useState(0);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const datos = await fetch("https://fakestoreapi.com/products");
      if (!datos.ok) throw new Error("Error al obtener productos");
      const prod = await datos.json();
      setListaProductos(prod);
    } catch (error) {
      console.error(error);
    }
  };

  const aplicarDescuento = (precio) => {
    return (precio * (1 - descuento / 100)).toFixed(2);
  };

  return (
    <div className="container">
      <h3 className="my-3">Descuentos</h3>

      {/* Control de descuento */}
      <div className="mb-4">
        <label className="form-label">Selecciona un descuento: {descuento}%</label>
        
        {/* Deslizador de descuento */}
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={descuento}
          onChange={(e) => setDescuento(Number(e.target.value))}
          className="form-range"
        />

        {/* Input numérico para más control */}
        {/* <input
          type="number"
          min="0"
          max="100"
          value={descuento}
          onChange={(e) => {
            const value = Math.min(100, Math.max(0, Number(e.target.value)));
            setDescuento(value);
          }}
          className="form-control w-25 mt-2"
        /> */}
      </div>

      {/* Lista de productos con el precio descontado */}
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {listaProductos.map((producto) => (
          <Card
            key={producto.id}
            image={producto.image}
            title={producto.title}
            price={aplicarDescuento(producto.price)}
            description={producto.description}
            id={producto.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Descuentos;
