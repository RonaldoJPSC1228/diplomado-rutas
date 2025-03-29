import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, price, description, id }) => {
  return (
    <div key={id}>
      <div className='card shadow-lg p-3 mb-5' style={{ width: '20rem', margin: '10px' }}>
        <img src={image} className='img-fluid' alt={title} /> {/* Mejora: Añade alt con el título */}
        <div className='card-body'>
          <p className='card-title'>{title}</p>
          <p>${price}</p> {/* Mejora: Añade el símbolo de moneda */}
          <Link to={`/products/${id}`} className='btn btn-dark text-center'>
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
