import { useState } from "react";
import "../styles/ProductItem.css";

import type { Product } from "../reducers/productsReducer";
interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

function ProductItem({ product, onAddToCart }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-desc">{product.desc}</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexDirection: "column",
        }}
      >
        <div
          className="add-btn"
          onClick={() => {
            if (product.stock === 0) return;
            onAddToCart(product, quantity);
          }}
        >
          {product.price} USD
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
