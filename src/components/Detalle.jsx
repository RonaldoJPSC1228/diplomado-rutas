import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

const Detalle = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto();
  }, [id]);

  const obtenerProducto = async () => {
      const dato = await fetch(`https://fakestoreapi.com/products/${id}`);
      const prod = await dato.json();
      setProducto([prod]);
  };

  return (
    <div>
      <h3>Prod Disponible</h3>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {producto.map((producto) => (
          <Card
            key={producto.id}
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

export default Detalle;
