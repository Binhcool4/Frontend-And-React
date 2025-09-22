import CartItemComponent from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../reducers/store";
import type { CartItem } from "../reducers/cartReducer";
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector<RootState, CartItem[]>((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdate = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: { id, quantity } });
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: "Update cart successfully",
    });
    setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: { id } });
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: "Delete item successfully",
    });
    setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
  };

  return (
    <div className="cart">
      <div className="panel panel-danger">
        <div className="panel-heading">Your Cart</div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {cart.length == 0 ? (
              <div
                style={{
                  color: "#a94442",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                  padding: "24px 0",
                }}
              >
                Empty product in your cart
              </div>
            ) : (
              <tbody>
                {cart.map((item: CartItem, idx: number) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    idx={idx}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            )}
          </table>
          <div>
            There are <b>{cart.length}</b> items in your shopping cart.
          </div>
          <div className="cart-total">{total} USD</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
