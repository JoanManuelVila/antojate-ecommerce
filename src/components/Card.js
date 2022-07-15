import React, { useState } from 'react'
import "../styles/card.css"
import ProductDescription from './ProductDescription'

const Card = ({ product, handleClick }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { id, name, category, price, img, stock, description } = product


  return (
    <div className='card'>
      <div className='image_box'>
        <img src={img} alt='' />
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <h2>${price}</h2>
        <button onClick={() => handleClick(product)}>Agregar al carrito</button>
        <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? "Ocultar detalle" : "Ver detalle"}</button>
      </div>
      {showDescription && <ProductDescription description={description} />}
    </div >
  )
}

export default Card