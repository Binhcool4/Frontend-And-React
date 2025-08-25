import { Component } from "react";
import Pagination from "./Pagination";
import Table from "./Table";

export default class Exercises05 extends Component {
  render() {
    return (
      <>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 20 }}>Quản lý sinh viên</h1>
          <div
            style={{
                display: "flex",
                flexDirection:"row-reverse",
                justifyContent: "space-between",
                marginBottom: 20,
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#1DA1F2",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div style={{ display: "flex",flexDirection:"row-reverse", gap: 10, marginBottom: 20 }}>
            <select
              style={{ padding: 5, borderRadius: 5, border: "1px solid #ccc" }}
            >
              <option value="">Sắp xếp theo</option>
              <option value="name">Tên sinh viên</option>
              <option value="date">Ngày sinh</option>
            </select>
            <input
              type="text"
              style={{ padding: 5, borderRadius: 5, border: "1px solid #ccc" }}
              placeholder="Tìm kiếm theo tên hoặc email"
            />
          </div>
          <Table />
          <Pagination />
        </div>
      </>
    );
  }
}