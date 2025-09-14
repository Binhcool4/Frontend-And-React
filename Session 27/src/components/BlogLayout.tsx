import { Outlet, NavLink } from "react-router-dom";
import "../styles/BlogLayout.css";

function BlogLayout() {
  return (
    <div className="blog-layout">
      <aside className="blog-sidebar">
        <div className="blog-header">
          My Blog
        </div>
        <nav className="blog-nav">
          <NavLink
            to="/blog/posts"
            className={({ isActive }) =>
              isActive ? "blog-nav-link active" : "blog-nav-link"
            }
          >
            Posts
          </NavLink>
        </nav>
        <div className="blog-footer">© 2025 My Blog</div>
      </aside>
      <main className="blog-main">
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
