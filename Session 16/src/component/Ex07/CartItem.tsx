import { Component } from "react";

interface CartItemProps {
  name: string;
  imgUrl: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default class CartItem extends Component<CartItemProps> {
  render() {
    const { name, imgUrl, quantity, onIncrease, onDecrease, onRemove } =
      this.props;
    return (
      <div className="cart-item">
        <img src={imgUrl} alt={name} />
        <span>{name}</span>
        <button className="quantity-btn" onClick={onIncrease}>
          +
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-btn" onClick={onDecrease}>
          -
        </button>
        <button className="remove-btn" onClick={onRemove}>
          🗑️
        </button>
      </div>
    );
  }
}
