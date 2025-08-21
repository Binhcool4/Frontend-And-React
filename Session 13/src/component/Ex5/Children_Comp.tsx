import { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ChildrenProps {
  product: Product;
}

export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    const { id, name, price, quantity } = this.props.product;
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price.toLocaleString()} đ</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}