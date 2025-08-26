import { Component } from "react";
import CartItem from "./CartItem";

interface CartItemType {
  name: string;
  imgUrl: string;
  quantity: number;
}

interface CartSidebarProps {
  items: CartItemType[];
  onIncrease: (idx: number) => void;
  onDecrease: (idx: number) => void;
  onRemove: (idx: number) => void;
}

export default class CartSidebar extends Component<CartSidebarProps> {
  render() {
    const { items, onIncrease, onDecrease, onRemove } = this.props;
    const total = items.reduce(
      (sum, item) =>
        sum + item.quantity * Number(item.name.match(/\d+/)?.[0] || 0),
      0
    );

    return (
      <div className="cart-sidebar">
        <h3>Cart</h3>
        {items.map((item, idx) => (
          <CartItem
            key={idx}
            name={item.name}
            imgUrl={item.imgUrl}
            quantity={item.quantity}
            onIncrease={() => onIncrease(idx)}
            onDecrease={() => onDecrease(idx)}
            onRemove={() => onRemove(idx)}
          />
        ))}
        <p className="total">Tổng tiền: {total} đ</p>
      </div>
    );
  }
}
