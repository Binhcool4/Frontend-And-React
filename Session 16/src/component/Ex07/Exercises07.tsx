import { Component } from "react";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";
import CartSidebar from "./CartSidebar";
import "./Exercises07.css"
interface Product {
  name: string;
  price: string;
  imgUrl: string;
}

interface CartItemType {
  name: string;
  imgUrl: string;
  quantity: number;
}

interface StateType {
  cart: CartItemType[];
}

export default class Exercises07 extends Component<object, StateType> {
  products: Product[] = [
    {
      name: "Điện thoại Samsung Galaxy",
      price: "20000000",
      imgUrl:
        "https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg",
    },
    {
      name: "Điện thoại iPhone14 Promax",
      price: "20500000",
      imgUrl:
        "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2022_10_28_638025697711565269_iPhone%2014%20Promax%20(15).jpg",
    },
    {
      name: "Điện thoại Oppo A9",
      price: "23000000",
      imgUrl:
        "https://product.hstatic.net/1000075554/product/oppo-a9-2020-official_6cd017493b4f4e498ee18a677d33f08a_0ac3cc80576f4dc588bad168f219aa10_1024x1024.jpg",
    },
    {
      name: "Điện thoại Oppo Find N5",
      price: "23500000",
      imgUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQicCg6BBoO0ZmeT2oU--eZLDgIlxvwtNTPvHy8O5HQj_9TXJZSE0OPCvaSmVNQok40FzS8NVkhL70e18Vl1JK7aqwRm7NXjVzlKBP3OOQruxt_KC8pHMZuJg",
    },
  ];

  constructor(props: object) {
    super(props);
    this.state = { cart: [] };
  }

  handleAddToCart = (product: Product) => {
    this.setState((prevState) => {
      const cart = [...prevState.cart];
      const idx = cart.findIndex((item) => item.name === product.name);
      if (idx >= 0) {
        cart[idx].quantity += 1;
      } else {
        cart.push({ name: product.name, imgUrl: product.imgUrl, quantity: 1 });
      }
      return { cart };
    });
  };

  handleIncrease = (idx: number) => {
    this.setState((prev) => {
      const cart = [...prev.cart];
      cart[idx].quantity += 1;
      return { cart };
    });
  };

  handleDecrease = (idx: number) => {
    this.setState((prev) => {
      const cart = [...prev.cart];
      if (cart[idx].quantity > 1) cart[idx].quantity -= 1;
      return { cart };
    });
  };

  handleRemove = (idx: number) => {
    this.setState((prev) => {
      const cart = [...prev.cart];
      cart.splice(idx, 1);
      return { cart };
    });
  };

  render() {
    return (
      <>
        <Navbar cartCount={this.state.cart.length} />
        <ProductGrid
          products={this.products}
          onAddToCart={this.handleAddToCart}
        />
        <CartSidebar
          items={this.state.cart}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onRemove={this.handleRemove}
        />
      </>
    );
  }
}
