import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetail.css";

const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description:
      "Laptop cao cấp với thiết kế mỏng nhẹ. Màn hình sắc nét, hiệu năng mạnh mẽ, phù hợp cho công việc và giải trí. Thời lượng pin lâu, dễ dàng mang theo bên mình.",
    image:
      "https://ngocnguyen.vn/cdn/images/202304/goods_img/moi-100-dell-xps-13-plus-9320-i7-1260p-ram-32gb-ssd-1tb-oled-G14428-1682237149441.jpg",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 30000000,
    description:
      "Điện thoại cao cấp với camera chất lượng, màn hình ProMotion siêu mượt. Hiệu năng vượt trội, nhiều tính năng bảo mật và tiện ích thông minh.",
    image:
      "https://product.hstatic.net/1000359786/product/34_6ce44e55aa08480e865276ff3c5cce73_master.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 25000000,
    description:
      "Smartphone mạnh mẽ, thiết kế sang trọng. Camera chụp đêm xuất sắc, pin bền bỉ, hỗ trợ sạc nhanh và nhiều tính năng hiện đại.",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/235838/samsung-galaxy-s22-ultra-600x600.jpg",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description:
      "Tai nghe chống ồn chủ động, pin lâu. Âm thanh chất lượng cao, kết nối đa thiết bị, cảm giác đeo thoải mái cả ngày dài.",
    image:
      "https://antuan.vn/public/uploads/anh-tin-tuc/san-pham/tai-nghe/sony/wh-1000xm6/sony-wh-1000xm6-13.webp",
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: 12000000,
    description:
      "Đồng hồ thông minh, nhiều tính năng sức khỏe. Theo dõi nhịp tim, đo ECG, chống nước, thiết kế thời trang phù hợp mọi đối tượng.",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/401/951/products/sr-8-nhom-2-76d6bb30-4afd-45ca-9d6a-31ade3a98df7.jpg?v=1739420570927",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <h2 className="product-detail-notfound">Sản phẩm không tồn tại</h2>
        <Link to="/products" className="product-detail-link">
          Quay lại danh sách sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">Chi tiết sản phẩm</h1>
      <div className="product-detail-flex">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-img"
        />
        <div>
          <h2 className="product-detail-info-title">{product.name}</h2>
          <div className="product-detail-price">
            Giá: {product.price.toLocaleString()} VND
          </div>
          <div className="product-detail-desc">{product.description}</div>
          <Link to="/products" className="product-detail-link">
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
