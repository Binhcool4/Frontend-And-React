import { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 20,
          }}
        >
          <tbody>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                STT
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Mã sinh viên
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Tên sinh viên
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Ngày sinh
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Trạng thái
              </th>
              <th
                style={{
                  padding: 10,
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Chức năng
              </th>
            </tr>
            <tr>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>1</td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                SV001
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                Nguyễn Văn A
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                21/12/2023
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                nva@gmail.com
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                <span
                  style={{
                    padding: "5px 10px",
                    borderRadius: 5,
                    color: "white",
                    backgroundColor: "rgb(192 238 157)",
                  }}
                >
                  Đang hoạt động
                </span>
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#9b59b6",
                      color: "white",
                    }}
                  >
                    Chặn
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#f1c40f",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#e74c3c",
                      color: "white",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>2</td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                SV002
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                Nguyễn Thị B
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                21/11/2022
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                ntb@gmail.com
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                <span
                  style={{
                    padding: "5px 10px",
                    borderRadius: 5,
                    color: "white",
                    backgroundColor: "#e74c3c",
                  }}
                >
                  Ngừng hoạt động
                </span>
              </td>
              <td style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#9b59b6",
                      color: "white",
                    }}
                  >
                    Chặn
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#f1c40f",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer",
                      backgroundColor: "#e74c3c",
                      color: "white",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}