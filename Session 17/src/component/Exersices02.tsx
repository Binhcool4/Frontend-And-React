import { useState } from "react";

export default function Exersices02() {
  const [product] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });
  return (
    <div>
      <h2>Thong tin san pham</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}