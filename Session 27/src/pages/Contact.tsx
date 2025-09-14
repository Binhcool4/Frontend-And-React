function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <h1
        style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "24px" }}
      >
        Thông tin liên hệ
      </h1>
      <div
        style={{
          fontSize: "17px",
          color: "#555",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <p>
          <b>Email:</b>{" "}
          <a
            href="mailto:nguyenvana@gmail.com"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            nguyenvana@gmail.com
          </a>
        </p>
        <p>
          <b>Số điện thoại:</b> 0123 456 789
        </p>
        <p>
          <b>LinkedIn:</b>{" "}
          <a
            href="https://linkedin.com/in/nguyenvana"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            linkedin.com/in/nguyenvana
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
