import React, { useState } from 'react'
import Amazon from './components/Amazon'
import NavBar from './components/NavBar'
import Cart from './components/Cart'

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    item.amount = 1;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const array = cart;
    array[index].amount += d
    if (array[index].amount === 0) array[index].amount = 1;
    setCart([...array]);
  };

  return (
    <React.Fragment>
      <NavBar setShow={setShow} size={cart.length} />
      {
        show ? (
          <Amazon handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )
      }
    </React.Fragment>
  )
}

export default App