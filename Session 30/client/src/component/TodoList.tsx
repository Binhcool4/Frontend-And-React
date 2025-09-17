import React from "react";
import TodoItem from "./TodoItem";
import styles from "./Layout.module.css";

type Todo = {
    id: number;
    title?: string;
    text?: string;
    completed: boolean;
};

type TodoListProps = {
    todos: Todo[];
    filter: string;
    editId: number | null;
    editText: string;
    onToggle: (id: number) => void;
    onEdit: (id: number, value: string) => void;
    onEditSave: (id: number) => void;
    onEditTextChange: (value: string) => void;
    onDeleteClick: (id: number, value: string) => void;
    isLoading?: boolean;
};

const TodoList: React.FC<TodoListProps> = ({
    todos,
    filter,
    editId,
    editText,
    onToggle,
    onEdit,
    onEditSave,
    onEditTextChange,
    onDeleteClick,
    isLoading = false,
}) => {
    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });
    return (
        <div
            className={styles.todoList}
            style={{
                maxHeight: filteredTodos.length > 5 ? 5 * 56 + 8 : undefined,
                overflowY: filteredTodos.length > 5 ? "auto" : undefined,
                position: "relative",
                minHeight: 100,
            }}
        >
            {/** Loading spinner overlay */}
            {isLoading && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            border: "6px solid #f3f3f3",
                            borderTop: "6px solid #1976d2",
                            borderRadius: "50%",
                            width: 60,
                            height: 60,
                            animation: "spin 1s linear infinite",
                        }}
                    />
                    <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
                </div>
            )}
            {!isLoading &&
                filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        editId={editId}
                        editText={editText}
                        onToggle={onToggle}
                        onEdit={onEdit}
                        onEditSave={onEditSave}
                        onEditTextChange={onEditTextChange}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
        </div>
    );
};

export default TodoList;