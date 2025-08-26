import { Component } from "react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: string;
  imgUrl: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default class ProductGrid extends Component<ProductGridProps> {
  render() {
    const { products, onAddToCart } = this.props;
    return (
      <div className="product-grid">
        {products.map((p, idx) => (
          <ProductCard
            key={idx}
            name={p.name}
            price={p.price}
            imgUrl={p.imgUrl}
            onAddToCart={() => onAddToCart(p)}
          />
        ))}
      </div>
    );
  }
}
