import { useState, useEffect } from "react";
import "../styles/CartItem.css";

import type { CartItem as CartItemType } from "../reducers/cartReducer";
interface CartItemProps {
  item: CartItemType;
  idx: number;
  onUpdate: (id: number, quantity: number) => void;
  onDelete: (id: number) => void;
}
function CartItem({ item, idx, onUpdate, onDelete }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{item.name}</td>
      <td>{item.price} USD</td>
      <td>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="cart-item-input"
        />
      </td>
      <td>
        <button
          className="update-btn"
          onClick={() => onUpdate(item.id, quantity)}
        >
          Update
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            if (
              window.confirm(
                "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?"
              )
            ) {
              onDelete(item.id);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
