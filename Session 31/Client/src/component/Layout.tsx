import { useEffect, useState } from "react";
import AddPostForm from "./AddPost";
import styles from "./Layout.module.css";
import EditPostForm from "./EditPostForm";
import ConfirmModal from "./ComfirmModal";

type Post = {
    id: number;
    title: string;
    image: string;
    date: string;
    status: string;
    content: string;
};

const Layout = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showAdd, setShowAdd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [showEdit, setShowEdit] = useState(false);
    const [editPost, setEditPost] = useState<Post | null>(null);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState<Post[] | null>(null);

    const fetchPosts = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("http://localhost:3000/list-post");
            if (!res.ok) throw new Error("Lỗi khi lấy dữ liệu");
            const data = await res.json();
            setPosts(data);
        } catch (err: any) {
            setError(err.message || "Lỗi không xác định");
        } finally {
            setLoading(false);
        }
    };
    const handleSearch = async (keyword: string) => {
        setSearch(keyword);
        if (!keyword.trim()) {
            setSearchResult(null);
            return;
        }
        setLoading(true);
        setError("");
        try {
            const res = await fetch("http://localhost:3000/list-post");
            if (!res.ok) throw new Error("Lỗi khi tìm kiếm");
            const data = await res.json();
            const filtered = data.filter((item: Post) =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setSearchResult(filtered);
        } catch (err: any) {
            setError(err.message || "Lỗi không xác định");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={styles.container}>
            {showAdd && (
                <div className={styles.overlay}>
                    <AddPostForm
                        onClose={() => setShowAdd(false)}
                    />
                </div>
            )}
            <div className={styles.header}>
                <div className={styles.searchGroup}>
                    <input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm"
                        className={styles.input}
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <select className={styles.select}>
                        <option>Lọc bài viết</option>
                    </select>
                </div>
                <button className={styles.addBtn} onClick={() => setShowAdd(true)}>
                    Thêm mới bài viết
                </button>
            </div>
            {loading ? (
                <div className={styles.centerText}>Đang tải dữ liệu...</div>
            ) : error ? (
                <div className={styles.error}>{error}</div>
            ) : searchResult !== null ? (
                searchResult.length > 0 ? (
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.th}>STT</th>
                                <th className={styles.th}>Tiêu đề</th>
                                <th className={styles.th}>Hình ảnh</th>
                                <th className={styles.th}>Ngày viết</th>
                                <th className={styles.th}>Trạng thái</th>
                                <th className={styles.th}>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResult.map((post, idx) => (
                                <tr key={post.id}>
                                    <td className={styles.td} style={{ textAlign: "center" }}>
                                        {idx + 1}
                                    </td>
                                    <td className={styles.td}>{post.title}</td>
                                    <td className={styles.td} style={{ textAlign: "center" }}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className={styles.img}
                                        />
                                    </td>
                                    <td className={styles.td} style={{ textAlign: "center" }}>
                                        {post.date}
                                    </td>
                                    <td className={styles.td} style={{ textAlign: "center" }}>
                                        <span
                                            className={
                                                post.status === "Đã xuất bản"
                                                    ? styles.status
                                                    : styles.status_false
                                            }
                                        >
                                            {post.status === "Đã xuất bản"
                                                ? "Đã xuất bản"
                                                : "Ngừng xuất bản"}
                                        </span>
                                    </td>
                                    <td className={styles.td} style={{ textAlign: "center" }}>
                                        <button
                                            className={`${styles.actionBtn} ${styles.blockBtn}`}
                                            onClick={() => {
                                                setSelectedPost(post);
                                                setShowConfirm(true);
                                            }}
                                        >
                                            {post.status === "Đã xuất bản" ? "Chặn" : "Bỏ chặn"}
                                        </button>
                                        <button
                                            className={`${styles.actionBtn} ${styles.editBtn}`}
                                            onClick={() => {
                                                setEditPost(post);
                                                setShowEdit(true);
                                            }}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className={`${styles.actionBtn} ${styles.deleteBtn}`}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className={styles.centerText}>Không có kết quả tìm kiếm</div>
                )
            ) : (
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}>STT</th>
                            <th className={styles.th}>Tiêu đề</th>
                            <th className={styles.th}>Hình ảnh</th>
                            <th className={styles.th}>Ngày viết</th>
                            <th className={styles.th}>Trạng thái</th>
                            <th className={styles.th}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, idx) => (
                            <tr key={post.id}>
                                <td className={styles.td} style={{ textAlign: "center" }}>
                                    {idx + 1}
                                </td>
                                <td className={styles.td}>{post.title}</td>
                                <td className={styles.td} style={{ textAlign: "center" }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className={styles.img}
                                    />
                                </td>
                                <td className={styles.td} style={{ textAlign: "center" }}>
                                    {post.date}
                                </td>
                                <td className={styles.td} style={{ textAlign: "center" }}>
                                    <span
                                        className={
                                            post.status === "Đã xuất bản"
                                                ? styles.status
                                                : styles.status_false
                                        }
                                    >
                                        {post.status === "Đã xuất bản"
                                            ? "Đã xuất bản"
                                            : "Ngừng xuất bản"}
                                    </span>
                                </td>
                                <td className={styles.td} style={{ textAlign: "center" }}>
                                    <button
                                        className={`${styles.actionBtn} ${styles.blockBtn}`}
                                        onClick={() => {
                                            setSelectedPost(post);
                                            setShowConfirm(true);
                                        }}
                                    >
                                        {post.status === "Đã xuất bản" ? "Chặn" : "Bỏ chặn"}
                                    </button>
                                    <button
                                        className={`${styles.actionBtn} ${styles.editBtn}`}
                                        onClick={() => {
                                            setEditPost(post);
                                            setShowEdit(true);
                                        }}
                                    >
                                        Sửa
                                    </button>
                                    <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <EditPostForm
                open={showEdit}
                post={editPost}
                allPosts={posts}
                onClose={() => setShowEdit(false)}
                onSuccess={fetchPosts}
            />
            <ConfirmModal
                open={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={async () => {
                    if (!selectedPost) return;
                    await fetch(`http://localhost:3000/list-post/${selectedPost.id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            status:
                                selectedPost.status === "Đã xuất bản"
                                    ? "Ngừng xuất bản"
                                    : "Đã xuất bản",
                        }),
                    });
                    setShowConfirm(false);
                    setSelectedPost(null);
                    fetchPosts();
                }}
                message={`Bạn có chắc chắn muốn ${selectedPost?.status === "Đã xuất bản"
                        ? "ngừng xuất bản"
                        : "xuất bản lại"
                    } bài viết ?`}
            />
        </div>
    );
};

export default Layout;