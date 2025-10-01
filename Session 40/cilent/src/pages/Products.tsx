import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
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
import { uploadImageFromUrl } from "../lib/cloudinary";

export default function Products() {
  const dispatch = useAppDispatch();
  const { items: products, loading } = useAppSelector(
    (state) => state.products
  );
  const { items: categories } = useAppSelector((state) => state.categories);

  const [searchText, setSearchText] = useState("");
  type StatusFilter = "active" | "inactive" | undefined;
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 5;
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [inputImageUrl, setInputImageUrl] = useState<string>("");

  const formatPrice = (value: number) => `${value.toLocaleString()} đ`;
  const getCategoryName = (categoryId: string) =>
    categories.find((c) => c.id === categoryId)?.name ?? "";
  const paginate = <T,>(list: T[], page: number, pageSize: number) =>
    list.slice((page - 1) * pageSize, page * pageSize);

  type ProductFormValues = {
    code: string;
    name: string;
    price: number | string;
    status: boolean;
    categoryId: string;
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    let result = products.filter((p) =>
      q
        ? p.name.toLowerCase().includes(q) ||
          (p.code ?? "").toLowerCase().includes(q)
        : true
    );
    if (statusFilter === "active")
      result = result.filter((p) => p.status === true);
    if (statusFilter === "inactive")
      result = result.filter((p) => p.status === false);
    return result;
  }, [products, searchText, statusFilter]);

  const paginatedProducts = useMemo(
    () => paginate(filteredProducts, currentPage, PAGE_SIZE),
    [filteredProducts, currentPage]
  );

  const columns: ColumnsType<Product> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 140 },
    { title: "Tên", dataIndex: "name", key: "name" },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 160,
      render: (_: any, record?: Product) =>
        record ? getCategoryName(record.categoryId) : "",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (_: any, record?: Product) =>
        record ? formatPrice(record.price) : "",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : ""),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (_: any, record?: Product) =>
        record ? (record.status ? "Hoạt động" : "Ngừng") : "",
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setInputImageUrl("");
    setOpen(true);
  }

  function onEdit(row: Product) {
    setEditing(row);
    setInputImageUrl(row.image || "");
    setOpen(true);
  }

  async function onDelete(id: string) {
    await dispatch(deleteProduct(id));
  }

  async function onSubmit(values: ProductFormValues) {
    let imageUrl = inputImageUrl.trim() || "";
    try {
      if (imageUrl) {
        const unchanged = editing && imageUrl === editing.image;
        if (!unchanged) {
          const hide = message.loading("Đang upload ảnh...");
          try {
            imageUrl = await uploadImageFromUrl(imageUrl);
            hide();
            message.success("Upload ảnh thành công");
          } catch (err: any) {
            hide();
            message.error(err?.message || "Upload ảnh thất bại");
            return;
          }
        }
      }

      const product: Product = {
        id: editing?.id ?? uuidv4(),
        code: values.code?.trim() || "",
        name: values.name,
        price: Number(values.price) || 0,
        image: imageUrl,
        status: values.status,
        categoryId: values.categoryId,
      };
      if (editing) {
        await dispatch(updateProduct(product));
      } else {
        await dispatch(addProduct(product));
      }
      setOpen(false);
      setInputImageUrl("");
    } catch (e: any) {
      message.error(e?.message || "Có lỗi xảy ra");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      {/* Filters */}
      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter}
          onChange={(v) => setStatusFilter(v as StatusFilter)}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Data table */}
      <Table
        columns={columns}
        dataSource={paginatedProducts}
        pagination={false}
        rowKey="id"
        loading={loading}
      />

      <div className="flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={filteredProducts.length}
          onChange={setCurrentPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: true }}
        >
          <Form.Item
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Nhập mã sản phẩm" }]}
          >
            <Input placeholder="Nhập mã sản phẩm" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="categoryId"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
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
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Ảnh sản phẩm">
            <Input
              placeholder="Nhập URL ảnh"
              value={inputImageUrl}
              onChange={(e) => setInputImageUrl(e.target.value)}
            />
            {inputImageUrl && (
              <div style={{ marginTop: 8 }}>
                <img
                  src={inputImageUrl}
                  alt="preview"
                  style={{ maxWidth: 120 }}
                />
              </div>
            )}
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: true, label: "Hoạt động" },
                { value: false, label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
