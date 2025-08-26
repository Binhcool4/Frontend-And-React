import { Component } from "react";

interface NavbarProps {
  cartCount: number; // số lượng sản phẩm trong giỏ
}

export default class Navbar extends Component<NavbarProps> {
  render() {
    const { cartCount } = this.props;

    return (
      <nav>
        <span>Trang chủ</span>
        <span>Danh sách sản phẩm</span>
        <span className="cart-icon">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </span>
      </nav>
    );
  }
}
