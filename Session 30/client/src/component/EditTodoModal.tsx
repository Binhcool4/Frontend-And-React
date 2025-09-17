import React from "react";

interface EditTodoModalProps {
    show: boolean;
    value: string;
    error?: string;
    onChange: (value: string) => void;
    onCancel: () => void;
    onSave: () => void;
}

const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const boxStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 8,
    padding: 24,
    minWidth: 400,
    boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
    show,
    value,
    error,
    onChange,
    onCancel,
    onSave,
}) => {
    if (!show) return null;
    return (
        <div style={modalStyle}>
            <div style={boxStyle}>
                <h2 style={{ marginTop: 0 }}>Sửa công việc</h2>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    style={{
                        width: "94%",
                        padding: 10,
                        fontSize: 16,
                        marginBottom: 8,
                        borderRadius: 5,
                        border: "1px solid #ccc",
                    }}
                    placeholder="Nhập tên công việc"
                />
                {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: "8px 18px",
                            borderRadius: 5,
                            border: "1px solid #ccc",
                            background: "#fff",
                        }}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onSave}
                        style={{
                            padding: "8px 18px",
                            borderRadius: 5,
                            border: "none",
                            background: "#1976d2",
                            color: "#fff",
                        }}
                    >
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTodoModal;