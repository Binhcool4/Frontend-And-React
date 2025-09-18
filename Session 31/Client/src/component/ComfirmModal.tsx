import React from "react";

interface ConfirmModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    open,
    onClose,
    onConfirm,
    message,
}) => {
    if (!open) return null;
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
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
                    borderRadius: 8,
                    minWidth: 400,
                    maxWidth: 480,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: 32,
                    position: "relative",
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "none",
                        border: "none",
                        fontSize: 28,
                        cursor: "pointer",
                    }}
                >
                    &times;
                </button>
                <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 18 }}>
                    Xác nhận
                </h2>
                <div
                    style={{ display: "flex", alignItems: "center", marginBottom: 24 }}
                >
                    <span style={{ color: "#faad14", fontSize: 28, marginRight: 12 }}>
                        ⚠️
                    </span>
                    <span style={{ fontSize: 17 }}>{message}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                    <button
                        onClick={onClose}
                        style={{
                            background: "#fff",
                            color: "#222",
                            border: "1px solid #ccc",
                            borderRadius: 6,
                            padding: "8px 24px",
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
                            background: "#1677ff",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "8px 24px",
                            fontWeight: 500,
                            fontSize: 16,
                            cursor: "pointer",
                        }}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;