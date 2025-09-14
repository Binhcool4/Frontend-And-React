import { Link } from "react-router-dom";
import { posts } from "../data/blogPosts";

function Posts() {
  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
        Danh sách bài viết
      </h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "#fff",
            border: "1px solid #2222",
            borderRadius: 8,
            marginBottom: 24,
            padding: 18,
            boxShadow: "0 1px 4px #0001",
          }}
        >
          <Link
            to={`/blog/posts/${post.id}`}
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#2563eb",
              textDecoration: "underline",
              marginBottom: 6,
              display: "block",
            }}
          >
            {post.title}
          </Link>
          <div style={{ color: "#444", fontSize: 16 }}>{post.excerpt}</div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
