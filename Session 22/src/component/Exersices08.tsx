import { Form, Button, Row, Col } from "react-bootstrap";

export default function Exercises08() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", marginTop: 20 }}>
      <h1 style={{ textAlign: "center", fontWeight: 700, marginBottom: 32 }}>
        Đăng ký tài khoản
      </h1>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Ví dụ: Nguyễn Văn A" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Group>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="formCity">
              <Form.Label>Thành phố</Form.Label>
              <Form.Select>
                <option>Hà Nội</option>
                <option>Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formDistrict">
              <Form.Label>Quận</Form.Label>
              <Form.Select>
                <option>Thanh Xuân</option>
                <option>Cầu Giấy</option>
                <option>Hoàng Mai</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formZip">
              <Form.Label>Mã bưu điện</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            style={{
              minWidth: 300,
              fontSize: 20,
              fontWeight: 500,
              background: "#1677ff",
              border: "none",
              borderRadius: 8,
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}