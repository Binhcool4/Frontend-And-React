import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/ProductList.css";

const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop cao cấp với thiết kế mỏng nhẹ.",
    image:
      "https://ngocnguyen.vn/cdn/images/202304/goods_img/moi-100-dell-xps-13-plus-9320-i7-1260p-ram-32gb-ssd-1tb-oled-G14428-1682237149441.jpg",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 30000000,
    description: "Điện thoại cao cấp với camera chất lượng.",
    image:
      "https://product.hstatic.net/1000359786/product/34_6ce44e55aa08480e865276ff3c5cce73_master.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Smartphone mạnh mẽ, thiết kế sang trọng.",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/235838/samsung-galaxy-s22-ultra-600x600.jpg",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Tai nghe chống ồn chủ động, pin lâu.",
    image:
      "https://antuan.vn/public/uploads/anh-tin-tuc/san-pham/tai-nghe/sony/wh-1000xm6/sony-wh-1000xm6-13.webp",
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Đồng hồ thông minh, nhiều tính năng sức khỏe.",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/401/951/products/sr-8-nhom-2-76d6bb30-4afd-45ca-9d6a-31ade3a98df7.jpg?v=1739420570927",
  },
];

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const [searchValue, setSearchValue] = useState("");

  // Đồng bộ input với query string khi load lại trang
  useEffect(() => {
    setSearchValue(query.get("search") || "");
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    if (searchValue) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }
    navigate(`/products${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Danh sách sản phẩm</h1>
      <form onSubmit={handleSearch} className="product-search-form">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchValue}
          onChange={handleInputChange}
          className="product-search-input"
        />
        <button type="submit" className="product-search-btn">
          Search
        </button>
      </form>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-card-img" />
            <h2 className="product-card-title">{p.name}</h2>
            <div className="product-card-price">
              Giá: {p.price.toLocaleString()} VND
            </div>
            <div className="product-card-desc">{p.description}</div>
            <Link to={`/products/${p.id}`} className="product-card-link">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
