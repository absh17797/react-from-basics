import React from "react";
import { useCart } from "../context/CartContext";

const CartListing = () => {
  const { products, removeFromCart } = useCart();
  let cart = products.filter((item)=> item.qty > 0)
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.qty} - ${item.price * item.qty}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartListing;