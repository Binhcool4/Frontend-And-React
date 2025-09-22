import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Notification from "./components/Notification";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 16, fontFamily: "Arial, sans-serif" }}>
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            marginTop: 24,
          }}
        >
          <div style={{ flex: 1 }}>
            <ProductList />
          </div>
          <div style={{ flex: 1 }}>
            <Cart />
            <Notification />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
