import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../reducers/store";
import type { Product } from "../reducers/productsReducer";
import type { CartItem } from "../reducers/cartReducer";
import "../styles/ProductList.css";

function ProductList() {
  const products = useSelector<RootState, Product[]>((state) => state.products);
  const cart = useSelector<RootState, CartItem[]>((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product, quantity: number) => {
    const cartItem = cart.find((item) => item.id === product.id);
    const currentQty = cartItem ? cartItem.quantity : 0;
    if (currentQty + quantity > product.stock) {
      dispatch({
        type: "SHOW_NOTIFICATION",
        payload: "Số lượng sản phẩm vượt quá số lượng trong kho",
      });
      setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: "Add to cart successfully",
    });
    setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
  };

  return (
    <div className="product-list">
      <div className="panel panel-primary">
        <div className="panel-heading">List Products</div>
        <div className="panel-body">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
