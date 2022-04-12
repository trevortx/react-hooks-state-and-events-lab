import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setinCart] = useState("in-cart")
  const appClass = inCart ? "" : "in-cart"
  const buttonText = inCart ? "Add to Cart" : "Item in Cart"

  function handleClick() {
    setinCart(!inCart)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
