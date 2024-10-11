
import React from 'react';

const ProductCard = ({ producto }) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
