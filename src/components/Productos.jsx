import React, { useEffect, useState } from "react";
import Card from "./Card";

const Productos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  useEffect(() => {
    obtenerProductos();
  }, []);
  const obtenerProductos = async () => {
    const datos = await fetch("https://fakestoreapi.com/products");
    const prod = await datos.json();
    setListaProductos(prod);
  };
  return (
    <div>
      <h3>Lista de Productos</h3>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {listaProductos.map((producto) => (
          <Card
            image={producto.image}
            title={producto.title}
            price={producto.price}
            description={producto.description}
            id={producto.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
