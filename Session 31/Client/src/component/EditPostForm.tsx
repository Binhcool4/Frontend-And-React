import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

interface EditPostFormProps {
    open: boolean;
    post: {
        id: number;
        title: string;
        image: string;
        content: string;
        date: string;
        status: string;
    } | null;
    allPosts: Array<{ id: number; title: string }>;
    onClose: () => void;
    onSuccess: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({
    open,
    post,
    allPosts,
    onClose,
    onSuccess,
}) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState<string | undefined>("");
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setImage(post.image);
            setContent(post.content);
            setErrorMsg("");
        }
    }, [post]);

    if (!open || !post) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        if (!title.trim() || !image.trim() || !content?.trim()) {
            setErrorMsg("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if (
            allPosts.some((p) => p.title.trim() === title.trim() && p.id !== post.id)
        ) {
            setErrorMsg("Tên bài viết đã tồn tại!");
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch(`http://localhost:3000/list-post/${post.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    image,
                    content,
                }),
            });
            if (!res.ok) throw new Error("Cập nhật thất bại!");
            onSuccess();
            onClose();
        } catch (err: any) {
            setErrorMsg(err.message || "Có lỗi xảy ra!");
        } finally {
            setSubmitting(false);
        }
    };

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
                    borderRadius: 10,
                    minWidth: 400,
                    maxWidth: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: 32,
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
                    Cập nhật bài viết
                </h2>
                <form onSubmit={handleSubmit}>
                    {errorMsg && (
                        <div style={{ color: "red", marginBottom: 10 }}>{errorMsg}</div>
                    )}
                    <div style={{ marginBottom: 18 }}>
                        <label
                            style={{ fontWeight: 600, display: "block", marginBottom: 6 }}
                        >
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
                            required
                        />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label
                            style={{ fontWeight: 600, display: "block", marginBottom: 6 }}
                        >
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
                            required
                        />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label
                            style={{ fontWeight: 600, display: "block", marginBottom: 6 }}
                        >
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
                            onClick={onClose}
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
                            Hủy
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
                            {submitting ? "Đang cập nhật..." : "Cập nhật"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPostForm;