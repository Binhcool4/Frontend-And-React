import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogPosts";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <p> Bài viết không tồn tại.</p>
        <div>
          <Link
            to="/blog/posts"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 18 }}>
        {post.title}
      </h2>
      <div style={{ fontSize: 18, color: "#333", marginBottom: 32 }}>
        {post.content}
      </div>
      <Link
        to="/blog/posts"
        style={{ color: "#2563eb", textDecoration: "underline" }}
      >
      Quay lại danh sách bài viết
      </Link>
    </div>
  );
}

export default PostDetail;
