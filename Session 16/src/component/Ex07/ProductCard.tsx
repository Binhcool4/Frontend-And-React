import { Component } from "react";

interface ProductCardProps {
  name: string;
  price: string;
  imgUrl: string;
  onAddToCart: () => void;
}

export default class ProductCard extends Component<ProductCardProps> {
  render() {
    const { name, price, imgUrl, onAddToCart } = this.props;
    return (
      <div className="product-card">
        <img src={imgUrl} alt={name} />
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <button className="add-to-cart" onClick={onAddToCart}>
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}
