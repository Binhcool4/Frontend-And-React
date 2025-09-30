import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Ex345() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      price: "",
      description: "",
      image: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "'name' is required";
    }

    if (!formData.price.trim()) {
      newErrors.price = "'price' is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "'description' is required";
    }

    if (!selectedFile && !formData.imageUrl.trim()) {
      newErrors.image = "Vui lòng chọn ảnh hoặc nhập URL ảnh";
    }

    setErrors(newErrors);
    return (
      newErrors.name === "" &&
      newErrors.price === "" &&
      newErrors.description === "" &&
      newErrors.image === ""
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      if (errors.image) {
        setErrors((prev) => ({
          ...prev,
          image: "",
        }));
      }
    }
  };

  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Huidinne");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dd9h0o4e3/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let imageUrl = formData.imageUrl;
      if (selectedFile) {
        imageUrl = await uploadImageToCloudinary(selectedFile);
      }

      const newProduct = {
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        imageUrl: imageUrl,
      };

      const response = await axios.post(
        "http://localhost:3000/Products",
        newProduct
      );
      setProducts((prev) => [...prev, response.data]);
      setFormData({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
      });
      setSelectedFile(null);
      setErrors({
        name: "",
        price: "",
        description: "",
        image: "",
      });

      alert("Thêm sản phẩm thành công!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Có lỗi xảy ra khi thêm sản phẩm!");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        await axios.delete(`http://localhost:3000/Products/${id}`);
        setProducts((prev) => prev.filter((product) => product.id !== id));
        alert("Xóa sản phẩm thành công!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Có lỗi xảy ra khi xóa sản phẩm!");
      }
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: 20,
          borderRadius: 8,
          marginBottom: 30,
        }}
      >
        <h2 style={{ marginBottom: 20, color: "#333" }}>Quản lý sản phẩm</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 15 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: "bold" }}
            >
              * Tên sản phẩm
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nhập tên sản phẩm"
              style={{
                width: "100%",
                padding: 10,
                border: `1px solid ${errors.name ? "#dc3545" : "#ddd"}`,
                borderRadius: 4,
                fontSize: 14,
              }}
            />
            {errors.name && (
              <div style={{ color: "#dc3545", fontSize: 12, marginTop: 5 }}>
                {errors.name}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 15 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: "bold" }}
            >
              * Giá
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Nhập giá sản phẩm"
              style={{
                width: "100%",
                padding: 10,
                border: `1px solid ${errors.price ? "#dc3545" : "#ddd"}`,
                borderRadius: 4,
                fontSize: 14,
              }}
            />
            {errors.price && (
              <div style={{ color: "#dc3545", fontSize: 12, marginTop: 5 }}>
                {errors.price}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 15 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: "bold" }}
            >
              Mô tả
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Nhập mô tả sản phẩm"
              rows={4}
              style={{
                width: "100%",
                padding: 10,
                border: `1px solid ${errors.description ? "#dc3545" : "#ddd"}`,
                borderRadius: 4,
                fontSize: 14,
                resize: "vertical",
              }}
            />
            {errors.description && (
              <div style={{ color: "#dc3545", fontSize: 12, marginTop: 5 }}>
                {errors.description}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 15 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: "bold" }}
            >
              * Ảnh sản phẩm
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                marginBottom: 10,
                padding: 5,
                border: `1px solid ${errors.image ? "#dc3545" : "#ddd"}`,
                borderRadius: 4,
                width: "100%",
              }}
            />
            {errors.image && (
              <div style={{ color: "#dc3545", fontSize: 12, marginTop: 5 }}>
                {errors.image}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: 4,
              fontSize: 16,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Thêm sản phẩm
          </button>
        </form>
      </div>
      <div>
        <h3 style={{ marginBottom: 20, color: "#333" }}>
          Danh sách sản phẩm ({products.length} sản phẩm)
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 15,
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 4,
                  marginBottom: 10,
                }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />

              <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>
                {product.name} - {product.price.toLocaleString()} đ
              </h4>

              <p
                style={{
                  margin: "0 0 15px 0",
                  color: "#666",
                  fontSize: 14,
                  lineHeight: 1.4,
                }}
              >
                {product.description}
              </p>

              <button
                onClick={() => handleDelete(product.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 4,
                  fontSize: 14,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Xóa
              </button>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 40,
              color: "#666",
              fontSize: 16,
            }}
          >
            Chưa có sản phẩm nào. Hãy thêm sản phẩm đầu tiên!
          </div>
        )}
      </div>
    </div>
  );
}
