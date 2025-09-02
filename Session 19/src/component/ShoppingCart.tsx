import { useMemo } from "react";

function ShoppingCart() {
  const cartItems = [
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 3 },
    { id: 3, name: "Sản phẩm C", price: 1500, quantity: 3 },
    { id: 4, name: "Sản phẩm D", price: 2500, quantity: 1 },
  ];

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
        Tổng giá trị đơn hàng: {totalPrice.toLocaleString()} đ
      </div>
  );
}

export default ShoppingCart;
