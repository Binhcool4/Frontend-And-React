import React from "react";

type DeleteModalProps = {
    show: boolean;
    title: string;
    onCancel: () => void;
    onConfirm: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
    show,
    title,
    onCancel,
    onConfirm,
}) => {
    if (!show) return null;
    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.15)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: 10,
                    minWidth: 350,
                    maxWidth: 420,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
                    padding: 32,
                    position: "relative",
                }}
            >
                <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 18 }}>
                    Xác nhận
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 24,
                    }}
                >
                    <span style={{ color: "#ef4444", fontSize: 28, marginTop: 2 }}>
                        ⓘ
                    </span>
                    <span style={{ fontSize: 17 }}>
                        Bạn có chắc chắn muốn xóa công việc <b>&lt;{title}&gt;</b> không?
                    </span>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: "8px 18px",
                            borderRadius: 6,
                            border: "1px solid #e5e7eb",
                            background: "#fff",
                            color: "#222",
                            fontWeight: 500,
                            fontSize: 16,
                            cursor: "pointer",
                        }}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: "8px 18px",
                            borderRadius: 6,
                            border: "none",
                            background: "#ef4444",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: 16,
                            cursor: "pointer",
                        }}
                    >
                        Xóa
                    </button>
                </div>
                <button
                    onClick={onCancel}
                    style={{
                        position: "absolute",
                        right: 16,
                        top: 16,
                        background: "none",
                        border: "none",
                        fontSize: 22,
                        color: "#888",
                        cursor: "pointer",
                    }}
                    title="Đóng"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;