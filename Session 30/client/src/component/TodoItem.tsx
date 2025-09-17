import React from "react";
import styles from "./Layout.module.css";

type Todo = {
    id: number;
    title?: string;
    text?: string;
    completed: boolean;
};

type TodoItemProps = {
    todo: Todo;
    editId: number | null;
    editText: string;
    onToggle: (id: number) => void;
    onEdit: (id: number, value: string) => void;
    onEditSave: (id: number) => void;
    onEditTextChange: (value: string) => void;
    onDeleteClick: (id: number, value: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    editId,
    editText,
    onToggle,
    onEdit,
    onEditSave,
    onEditTextChange,
    onDeleteClick,
}) => {
    const displayText = todo.title ?? todo.text ?? "";
    return (
        <div className={styles.todoItem}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            {editId === todo.id ? (
                <>
                    <input
                        className={styles.input}
                        style={{ marginBottom: 0 }}
                        value={editText}
                        onChange={(e) => onEditTextChange(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onEditSave(todo.id)}
                        autoFocus
                    />
                    <button
                        className={styles.editBtn}
                        onClick={() => onEditSave(todo.id)}
                        title="Lưu"
                    >
                        💾
                    </button>
                </>
            ) : (
                <>
                    <span
                        className={
                            todo.completed
                                ? `${styles.todoText} ${styles.completed}`
                                : styles.todoText
                        }
                    >
                        {displayText}
                    </span>
                    <button
                        className={styles.editBtn}
                        onClick={() => onEdit(todo.id, displayText)}
                        title="Sửa"
                    >
                        ✏️
                    </button>
                </>
            )}
            <button
                className={styles.deleteBtn}
                onClick={() => onDeleteClick(todo.id, displayText)}
                title="Xóa"
            >
                🗑️
            </button>
        </div>
    );
};

export default TodoItem;