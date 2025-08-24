import { Component } from "react";

interface StateTypes {
  id: string;
  name: string;
  price: string;
  quantity: string;
}

export default class Exercise05 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: "SP001",
      name: "Cam da xanh",
      price: "20000",
      quantity: "10",
    };
  }

  render() {
    const { id, name, price, quantity } = this.state;
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Product:", this.state);
    };

    return (
      <form onSubmit={handleSubmit} style={{display: "flex",flexDirection: "column",width: "300px",padding: '40px',border: "1px solid #ccc",borderRadius: "5px",}}>
        <h2 style={{ margin: "0 0 10px 0", textAlign:"center" }}>Thêm mới sản phẩm</h2>
        <label style={{ marginTop: 10 }}>Mã sản phẩm</label>
        <input type="text" name="id" value={id} onChange={(e) => this.setState({ id: e.target.value })} style={{ padding: 5, marginTop: 5 }}/>

        <label style={{ marginTop: 10 }}>Tên sản phẩm</label>
        <input type="text" name="name" value={name} onChange={(e) => this.setState({ name: e.target.value })} style={{ padding: 5, marginTop: 5 }}/>

        <label style={{ marginTop: 10 }}>Giá</label>
        <input type="number" name="price" value={price} onChange={(e) => this.setState({ price: e.target.value })} style={{ padding: 5, marginTop: 5 }}/>

        <label style={{ marginTop: 10 }}>Số lượng</label>
        <input type="number" name="quantity" value={quantity} onChange={(e) => this.setState({ quantity: e.target.value })} style={{ padding: 5, marginTop: 5 }}/>

        <button type="submit" style={{marginTop: 20, padding: 10, backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 5, cursor: "pointer",}}>
          Đăng ký
        </button>
      </form>
    );
  }
}