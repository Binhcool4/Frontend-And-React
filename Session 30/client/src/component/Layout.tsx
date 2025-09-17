// Xóa tất cả công việc

import React, { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import AddTodoForm from "./AddTodoForm";
import FilterButtons from "./FilterButton";
import TodoList from "./TodoList";
import DeleteModal from "./DeleteModal";
import EditTodoModal from "./EditTodoModal";

type Todo = {
    id: number;
    title?: string;
    text?: string;
    completed: boolean;
};

type Filter = "all" | "completed" | "active";

const Layout: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState<Filter>("all");
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");
    const [addError, setAddError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // State cho modal sửa
    const [showEditModal, setShowEditModal] = useState(false);
    const [editValue, setEditValue] = useState("");
    const [editError, setEditError] = useState("");
    const API_URL = "http://localhost:3000/todo";

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [deleteTitle, setDeleteTitle] = useState<string>("");
    // Modal xác nhận xóa công việc hoàn thành
    const [showClearCompletedModal, setShowClearCompletedModal] = useState(false);
    const handleClearAll = async () => {
        await Promise.all(
            todos.map((todo) => fetch(`${API_URL}/${todo.id}`, { method: "DELETE" }))
        );
        setTodos([]);
    };
    // Fetch tasks from server
    useEffect(() => {
        setIsLoading(true);
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .finally(() => setIsLoading(false));
    }, []);

    const handleAdd = async () => {
        const name = input.trim();
        if (!name) {
            setAddError("Tên công việc không được để trống!");
            return;
        }
        const isDuplicate = todos.some(
            (todo) =>
                (todo.title ?? todo.text ?? "").toLowerCase() === name.toLowerCase()
        );
        if (isDuplicate) {
            setAddError("Tên công việc đã tồn tại!");
            return;
        }
        setAddError("");
        const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
        const newId = maxId + 1;
        const newTodo = { id: newId.toString(), title: name, completed: false };
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        setTodos([...todos, data]);
        setInput("");
    };

    const handleToggle = async (id: number) => {
        const todo = todos.find((t) => t.id === id);
        if (!todo) return;
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !todo.completed }),
        });
        if (res.ok) {
            setTodos(
                todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
            );
        }
    };

    // Handler for editing a todo (mở modal sửa)
    const handleEdit = (id: number, value: string) => {
        setEditId(id);
        setEditValue(value);
        setEditError("");
        setShowEditModal(true);
    };

    // Handler for saving edit (modal)
    const handleEditSave = async () => {
        const name = editValue.trim();
        if (!name) {
            setEditError("Tên công việc không được để trống!");
            return;
        }
        const isDuplicate = todos.some(
            (todo) =>
                todo.id !== editId &&
                (todo.title ?? todo.text ?? "").toLowerCase() === name.toLowerCase()
        );
        if (isDuplicate) {
            setEditError("Tên công việc đã tồn tại!");
            return;
        }
        setEditError("");
        if (editId == null) return;
        const res = await fetch(`${API_URL}/${editId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: name }),
        });
        if (res.ok) {
            setTodos(
                todos.map((todo) =>
                    todo.id === editId ? { ...todo, title: name, text: undefined } : todo
                )
            );
            setShowEditModal(false);
            setEditId(null);
            setEditValue("");
            setEditError("");
        }
    };

    const handleDeleteClick = (id: number, value: string) => {
        setDeleteId(id);
        setDeleteTitle(value);
        setShowModal(true);
    };

    const handleDeleteConfirm = async () => {
        if (deleteId == null) return;
        const res = await fetch(`${API_URL}/${deleteId}`, { method: "DELETE" });
        if (res.ok) {
            setTodos(todos.filter((todo) => todo.id !== deleteId));
        }
        setShowModal(false);
        setDeleteId(null);
        setDeleteTitle("");
    };

    // Cancel delete
    const handleDeleteCancel = () => {
        setShowModal(false);
        setDeleteId(null);
        setDeleteTitle("");
    };

    // Filter handler
    const handleFilter = (f: Filter) => setFilter(f);

    // Clear completed todos (chỉ thực hiện khi xác nhận)
    const handleClearCompleted = async () => {
        const completed = todos.filter((todo) => todo.completed);
        await Promise.all(
            completed.map((todo) =>
                fetch(`${API_URL}/${todo.id}`, { method: "DELETE" })
            )
        );
        setTodos(todos.filter((todo) => !todo.completed));
        setShowClearCompletedModal(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Quản lý công việc</div>
            {/* Form thêm công việc */}
            <AddTodoForm
                input={input}
                addError={addError}
                onInputChange={(value: string) => {
                    setInput(value);
                    setAddError("");
                }}
                onAdd={handleAdd}
            />
            {/* Nút lọc công việc */}
            <FilterButtons filter={filter} onFilter={handleFilter} />
            {/* Danh sách công việc */}
            <TodoList
                todos={todos}
                filter={filter}
                editId={editId}
                editText={editText}
                onToggle={handleToggle}
                onEdit={handleEdit}
                onEditSave={() => { }}
                onEditTextChange={setEditText}
                onDeleteClick={handleDeleteClick}
                isLoading={isLoading}
            />
            {/* Modal sửa công việc */}
            <EditTodoModal
                show={showEditModal}
                value={editValue}
                error={editError}
                onChange={setEditValue}
                onCancel={() => {
                    setShowEditModal(false);
                    setEditId(null);
                    setEditValue("");
                    setEditError("");
                }}
                onSave={handleEditSave}
            />
            {/* Modal xác nhận xóa */}
            <DeleteModal
                show={showModal}
                title={deleteTitle}
                onCancel={handleDeleteCancel}
                onConfirm={handleDeleteConfirm}
            />
            <div className={styles.actionBtns}>
                <button
                    className={styles.clearCompletedBtn}
                    onClick={() => setShowClearCompletedModal(true)}
                >
                    Xóa công việc hoàn thành
                </button>
                <button className={styles.clearAllBtn} onClick={handleClearAll}>
                    Xóa tất cả công việc
                </button>
            </div>
            {/* Modal xác nhận xóa công việc hoàn thành */}
            <DeleteModal
                show={showClearCompletedModal}
                title="Bạn có chắc muốn xóa tất cả công việc đã hoàn thành?"
                onCancel={() => setShowClearCompletedModal(false)}
                onConfirm={handleClearCompleted}
            />
        </div>
    );
};

export default Layout;