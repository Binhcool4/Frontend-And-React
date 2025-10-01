import { useMemo, useState, useEffect } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../store/categoriesSlice";

type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: boolean;
};

export default function Categories() {
  const dispatch = useAppDispatch();
  const { items: categories, loading } = useAppSelector(
    (state) => state.categories
  );
  const [searchText, setSearchText] = useState("");
  type StatusFilter = "active" | "inactive" | "";
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);

  const filteredCategories = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    let result = categories.filter((c) =>
      q ? c.name.toLowerCase().includes(q) : true
    );
    if (statusFilter === "active")
      result = result.filter((c) => c.status === true);
    if (statusFilter === "inactive")
      result = result.filter((c) => c.status === false);
    return result;
  }, [categories, searchText, statusFilter]);

  const paginatedCategories = useMemo(
    () =>
      filteredCategories.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      ),
    [filteredCategories, currentPage]
  );

  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (_: any, record?: CategoryRow) =>
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
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: string) {
    await dispatch(deleteCategory(id));
  }

  interface CategoryFormValues {
    name: string;
    description?: string;
    status: boolean;
  }

  async function onSubmit(values: CategoryFormValues) {
    const next: CategoryRow = {
      id: editing?.id ?? uuidv4(),
      name: values.name,
      description: values.description || "",
      status: values.status,
    };
    if (editing) {
      await dispatch(updateCategory(next));
    } else {
      await dispatch(addCategory(next));
    }
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      {/* Filters */}
      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          style={{ width: "200px" }}
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as StatusFilter) || "")}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm"
          style={{ width: "300px" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Data table */}
      <Table
        loading={loading}
        columns={columns}
        dataSource={paginatedCategories}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={filteredCategories.length}
          onChange={setCurrentPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
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
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
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
