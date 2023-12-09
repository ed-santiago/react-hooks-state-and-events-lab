import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const itemClass = inCart ? "in-cart" : "";

  function handleAddToCart() {
    setInCart((inCart) => !inCart)
  }

  const buttonText = inCart ? "Remove from Cart" : "Add to Cart";
  const buttonBackgroundColor = inCart ? "hotpink" : "yellow";
  const buttonColor = inCart ? "white" : "black";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{ background: buttonBackgroundColor, color: buttonColor }} onClick={handleAddToCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
