import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (item) => {
    const arr = cart.filter((product) => product !== item);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;

    cart.map((item) => {
      ans += item.amount * item.price
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>${item.price}c/u</span>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Precio Total:</span>
        <span>$ {price}</span>
      </div>
    </article>
  );
};

export default Cart;