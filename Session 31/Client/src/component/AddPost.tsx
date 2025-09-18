import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const AddPost = ({ onClose }: { onClose?: () => void }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState<string | undefined>("");

    const handleReset = () => {
        setTitle("");
        setImage("");
        setContent("");
    };

    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        if (!title.trim() || !content?.trim()) {
            setErrorMsg("Vui lòng nhập tiêu đề và nội dung!");
            return;
        }
        setSubmitting(true);
        try {
            const getRes = await fetch("http://localhost:3000/list-post");
            const list = getRes.ok ? await getRes.json() : [];
            const maxId =
                Array.isArray(list) && list.length > 0
                    ? Math.max(...list.map((p: any) => p.id || 0))
                    : 0;
            const newId = (maxId + 1).toString();
            const res = await fetch("http://localhost:3000/list-post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: newId,
                    title,
                    image,
                    date: new Date().toLocaleDateString("en-GB"),
                    status: true,
                    content,
                }),
            });
            if (!res.ok) throw new Error("Không thể thêm bài viết!");
            setSuccessMsg("Thêm bài viết thành công!");
            handleReset();
            if (onClose) onClose();
            window.location.reload();
        } catch (err: any) {
            setErrorMsg(err.message || "Có lỗi xảy ra!");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: 700,
                margin: "24px auto",
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                padding: 32,
                border: "1px solid #eee",
                position: "relative",
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    background: "none",
                    border: "none",
                    fontSize: 32,
                    cursor: "pointer",
                    color: "#222",
                }}
                aria-label="Đóng"
            >
                &times;
            </button>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 28 }}>
                Thêm mới bài viết
            </h2>
            <form onSubmit={handleSubmit}>
                {errorMsg && (
                    <div style={{ color: "red", marginBottom: 10 }}>{errorMsg}</div>
                )}
                {successMsg && (
                    <div style={{ color: "green", marginBottom: 10 }}>{successMsg}</div>
                )}
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                        Tên bài viết
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: "96%",
                            padding: 12,
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: 16,
                        }}
                        placeholder=""
                        required
                    />
                </div>
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                        Hình ảnh
                    </label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        style={{
                            width: "96%",
                            padding: 12,
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: 16,
                        }}
                        placeholder=""
                        required
                    />
                </div>
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                        Nội dung
                    </label>
                    <div data-color-mode="light">
                        <MDEditor
                            value={content}
                            onChange={setContent}
                            height={200}
                            textareaProps={{ placeholder: "Nhập nội dung" }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 12,
                        marginTop: 24,
                    }}
                >
                    <button
                        type="button"
                        onClick={handleReset}
                        style={{
                            background: "#fff",
                            color: "#222",
                            border: "1px solid #ccc",
                            borderRadius: 6,
                            padding: "10px 24px",
                            fontWeight: 500,
                            fontSize: 16,
                            cursor: "pointer",
                        }}
                    >
                        Làm mới
                    </button>
                    <button
                        type="submit"
                        style={{
                            background: "#1677ff",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "10px 24px",
                            fontWeight: 500,
                            fontSize: 16,
                            cursor: submitting ? "not-allowed" : "pointer",
                            opacity: submitting ? 0.7 : 1,
                        }}
                        disabled={submitting}
                    >
                        {submitting ? "Đang tải..." : "Xuất bản"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;