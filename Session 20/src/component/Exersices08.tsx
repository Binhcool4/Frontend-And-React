import { useReducer } from "react";

interface UserState {
  name: string;
  email: string;
}

type Action ={ type: "setName"; payload: string } | { type: "setEmail"; payload: string };

function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function Exersices08() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  return (
    <div
      style={{
        background: "#fff",
        padding: 32,
        borderRadius: 16,
        boxShadow: "0 2px 12px #eee",
        maxWidth: 500,
        margin: "40px auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 32,
        }}
      >
        User Information Form
      </h2>
      <form>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 500, fontSize: 18 }}>Tên:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "setName", payload: e.target.value })
            }
            style={{
              width: "95%",
              padding: "10px 12px",
              fontSize: 18,
              borderRadius: 6,
              border: "1px solid #ccc",
              marginTop: 8,
            }}
          />
        </div>
        <div style={{ marginBottom: 32 }}>
          <label style={{ fontWeight: 500, fontSize: 18 }}>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
            style={{
              width: "95%",
              padding: "10px 12px",
              fontSize: 18,
              borderRadius: 6,
              border: "1px solid #ccc",
              marginTop: 8,
            }}
          />
        </div>
      </form>
      <div
        style={{
          background: "#f7fafd",
          borderRadius: 10,
          borderLeft: "5px solid #2196f3",
          padding: 24,
          marginTop: 16,
        }}
      >
        <h3 style={{ color: "#000000ff", fontWeight: 600, marginBottom: 12 }}>
          Thông tin người dùng:
        </h3>
        <div style={{ fontSize: 18, color: "#174ea6" }}>
          Tên: <span style={{ color: "#000000ff" }}>{state.name ? state.name : "(Chưa nhập)"}</span>
        </div>
        <div style={{ fontSize: 18, color: "#174ea6" }}>
          Email: <span style={{ color: "#000000ff" }}>{state.email ? state.email : "(Chưa nhập)"}</span>
        </div>
      </div>
    </div>
  );
}
