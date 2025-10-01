import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  type Product,
} from "../store/productsSlice";
import { fetchCategories } from "../store/categoriesSlice";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const { items: products, loading } = useAppSelector((s) => s.products);
  const { items: categories } = useAppSelector((s) => s.categories);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [inputImageUrl, setInputImageUrl] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const filtered = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    let result = products.filter((p) =>
      q
        ? p.name.toLowerCase().includes(q) ||
          (p.code ?? "").toLowerCase().includes(q)
        : true
    );
    if (statusFilter === "active")
      result = result.filter((r) => r.status === true);
    if (statusFilter === "inactive")
      result = result.filter((r) => r.status === false);
    return result;
  }, [products, searchText, statusFilter]);

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  const columns = [
    { title: "Mã", dataIndex: "code", key: "code", width: 140 },
    { title: "Tên", dataIndex: "name", key: "name" },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (_: any, record?: Product) =>
        record ? record.price.toLocaleString() + " đ" : "",
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (_: any, record?: Product) => {
        if (!record) return "";
        const cat = categories.find((c) => c.id === record.categoryId);
        return cat ? cat.name : "";
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (src: string) =>
        src ? (
          <img src={src} alt="product" className="w-20 h-20 object-cover" />
        ) : (
          "-"
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_: any, record?: Product) =>
        record ? (record.status ? "Hoạt động" : "Ngừng") : "",
    },
    {
      title: "Thao tác",
      key: "actions",
      render: (_text: string, record?: Product) => (
        <div className="flex space-x-2">
          <Button type="primary" onClick={() => record && handleEdit(record)}>
            Sửa
          </Button>
          <Button danger onClick={() => record && handleDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  const handleAddNew = () => {
    setEditingProduct(null);
    setInputImageUrl("");
    setIsModalVisible(true);
  };

  const handleEdit = (product: Product): void => {
    setEditingProduct(product);
    setInputImageUrl(product.image || "");
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    await dispatch(deleteProduct(id));
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = async (values: any): Promise<void> => {
    const next: Product = {
      id: editingProduct?.id ?? uuidv4(),
      code: values.code?.trim() || "",
      name: values.name,
      price: Number(values.price) || 0,
      status: values.status,
      image: inputImageUrl,
      categoryId: values.categoryId,
    };
    if (editingProduct) {
      await dispatch(updateProduct(next));
    } else {
      await dispatch(addProduct(next));
    }
    setIsModalVisible(false);
    setInputImageUrl("");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <Button type="primary" onClick={handleAddNew}>
          Thêm mới sản phẩm
        </Button>
      </div>

      <div className="mb-4 flex justify-end gap-4">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter}
          onChange={(v) => setStatusFilter(v)}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm sản phẩm (mã hoặc tên)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-[300px]"
        />
      </div>

      <Table
        columns={columns as any}
        dataSource={pagedProducts}
        pagination={false}
        rowKey="id"
        loading={loading}
      />

      <div className="flex justify-end mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setCurrentPage}
        />
      </div>

      <Modal
        title={editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={editingProduct || { status: true }}
          onFinish={handleModalOk}
          layout="vertical"
        >
          <Form.Item
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Vui lòng nhập mã sản phẩm!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá sản phẩm"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="categoryId"
            label="Danh mục"
            rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
          >
            <Select
              options={categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              }))}
              placeholder="Chọn danh mục"
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
          >
            <Select
              options={[
                { value: true, label: "Hoạt động" },
                { value: false, label: "Ngừng" },
              ]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>
          <Form.Item label="Hình ảnh sản phẩm">
            <Input
              placeholder="Nhập URL ảnh"
              value={inputImageUrl}
              onChange={(e) => setInputImageUrl(e.target.value)}
            />
            {inputImageUrl && (
              <div style={{ marginTop: 8 }}>
                <img
                  src={inputImageUrl}
                  alt="product"
                  style={{ maxWidth: 120 }}
                />
              </div>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductTable;
