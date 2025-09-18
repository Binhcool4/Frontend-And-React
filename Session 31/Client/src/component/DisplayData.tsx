import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    image: string;
    date: string;
    status: string;
}

const DisplayData: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get<Post[]>("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi gọi API:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <table border={1} cellPadding={10} style={{ width: "100%", textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Ngày viết</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>
                                <img src={post.image} alt={post.title} width="80" />
                            </td>
                            <td>{post.date}</td>
                            <td>{post.status}</td>
                            <td>
                                <button>Chặn</button>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayData;
