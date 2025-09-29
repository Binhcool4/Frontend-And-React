import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import type { Book } from "./components/types";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookSearchSortFilter from "./components/BookSearchSortFilter";
import { Button } from "@mui/material";
import LoadingOverlay from "./components/LoadingOverlay";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setLoading(true);
    axios
      .get<Book[]>("http://localhost:3000/Books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(books.map((b) => b.category))).sort();
  }, [books]);

  const handleSubmit = async (data: {
    id?: number;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    setLoading(true);
    try {
      if (data.id) {
        await axios.put(`http://localhost:3000/Books/${data.id}`, {
          title: data.title,
          author: data.author,
          year: data.year,
          category: data.category,
        });
      } else {
        await axios.post("http://localhost:3000/Books", {
          title: data.title,
          author: data.author,
          year: data.year,
          category: data.category,
        });
      }

      const res = await axios.get<Book[]>("http://localhost:3000/Books");
      setBooks(res.data);
      setOpenForm(false);
      setEditing(undefined);
    } catch (err) {
      console.error("Lỗi khi lưu sách:", err);
      alert(data.id ? "Lỗi khi cập nhật sách!" : "Lỗi khi thêm sách!");
    } finally {
      setLoading(false);
    }
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }
    if (category !== "all") out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === "title") {
        const r = a.title.localeCompare(b.title);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === "asc" ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/Books/${id}`);
      const res = await axios.get<Book[]>("http://localhost:3000/Books");
      setBooks(res.data);
    } catch (err) {
      console.error("Lỗi khi xóa sách:", err);
      alert("Lỗi khi xóa sách!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {loading && <LoadingOverlay />}
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch("");
            setCategory("all");
            setSortBy("title");
            setSortDir("asc");
          }}
        />
      </div>

      <div className="mt-6">
        <BookList
          books={filteredSorted}
          onEdit={(b) => {
            setEditing(b);
            setOpenForm(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        books={books}
      />
    </div>
  );
};

export default App;
