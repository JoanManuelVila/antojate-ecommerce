import React, { useState, useEffect } from 'react'
import { getProducts } from '../data'
import Card from './Card'
import '../styles/amazon.css'

const Amazon = ({ handleClick }) => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const categoriesArray = ['tortas', 'galletas', 'postres']

  useEffect(() => {
    async function fetchData() {
      const prods = await getProducts();
      let prodsByCategory = [];
      if (categoriesArray.includes(category)) {
        prodsByCategory = prods.filter((product) => product.category === category)
      } else {
        prodsByCategory = prods;
      }
      setProducts(prodsByCategory);
      return prods
    }
    fetchData();
  }, [category])

  return (
    <>
      <div className='category-container'>
        <button onClick={() => setCategory()}>Todos</button>
        <button onClick={() => setCategory('galletas')}>Galletas</button>
        <button onClick={() => setCategory('tortas')}>Tortas</button>
        <button onClick={() => setCategory('postres')}>Postres</button>
      </div>
      <section>
        {
          products &&
          products.map(product =>
            <Card key={product.id} product={product} handleClick={handleClick} />
          )
        }
      </section>
    </>
  )
}

export default Amazon