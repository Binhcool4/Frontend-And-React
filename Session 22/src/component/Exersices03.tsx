import Card from "react-bootstrap/Card";
const products = [
  {
    title: "MacBook Air 2018",
    img: "https://cdn.tgdd.vn/Files/2019/04/17/1161206/a1_800x450.jpg",
    desc: "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
  },
  {
    title: "MacBook Pro 2019",
    img: "https://cdn.tgdd.vn/Products/Images/44/215941/macbook-pro-16-201926-macbookprotouch16inch-1-600x600.jpg",
    desc: "The reason I am selling the machine is because it is too much power for what I need.",
    price: "30.000.000 đ",
  },
];

export default function Exercises03() {
  return (
    <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
      {products.map((p, idx) => (
        <Card
          key={idx}
          style={{
            width: 320,
            borderRadius: 12,
            boxShadow: "0 2px 8px #0001",
            overflow: "hidden",
          }}
        >
          {p.img && (
            <Card.Img
              variant="top"
              src={p.img}
              alt={p.title}
              style={{ height: 180, objectFit: "cover" }}
            />
          )}
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ margin: "16px 0 8px 0" }}>
              {p.title}
            </Card.Title>
            <Card.Text style={{ color: "#444", minHeight: 60 }}>
              {p.desc}
            </Card.Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <button
                style={{
                  background: "#0d6efd",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 24px",
                  fontSize: 18,
                  cursor: "pointer",
                  marginRight: 16,
                }}
              >
                Xem chi tiết
              </button>
              <span style={{ fontSize: 18, fontWeight: 500 }}>{p.price}</span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}