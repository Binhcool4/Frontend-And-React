function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <h1
        style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "24px" }}
      >
        Giới thiệu bản thân
      </h1>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "18px" }}>
        Xin chào! Tôi là{" "}
        <span style={{ color: "#1976d2", fontWeight: "bold" }}>
          Nguyễn Văn A
        </span>
        , một lập trình viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng
        các ứng dụng web hiện đại và tối ưu trải nghiệm người dùng.
      </p>
      <p style={{ fontSize: "17px", color: "#555", marginBottom: "12px" }}>
        <b>Sở thích:</b> Đọc sách, viết code và đi du lịch.
      </p>
      <p style={{ fontSize: "17px", color: "#555" }}>
        <b>Mục tiêu:</b> Trở thành một lập trình viên xuất sắc và tạo ra những
        sản phẩm công nghệ có giá trị!
      </p>
    </div>
  );
}

export default About;
