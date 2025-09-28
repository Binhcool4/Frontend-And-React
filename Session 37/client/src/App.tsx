import { useMemo, useState, useEffect } from "react";
import { Button } from "@mui/material";
import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";
import axios from "axios";
import LoadingOverlay from "../src/features/students/LoadingOverlay";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Student> | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  // State for delete confirmation dialog
  const [deleteTask, setDeleteTask] = useState<Student | null>(null);
  const [openDelete, setOpenDelete] = useState(false);

  // Search / filter / sort state
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  useEffect(() => {
    setLoading(true);
    axios
      .get<Student[]>("http://localhost:8081/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const grades = useMemo(() => {
    const g = Array.from(new Set(students.map((s) => s.grade))).sort();
    return g;
  }, [students]);

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };
  const handleSubmit = async (data: {
    id?: number;
    name: string;
    age: number;
    grade: string;
  }) => {
    if (data.id) {
      try {
        await axios.put(`http://localhost:8081/students/${data.id}`, {
          name: data.name,
          age: data.age,
          grade: data.grade,
        });
        // Lấy lại danh sách mới nhất từ server để đảm bảo đồng bộ
        const res = await axios.get<Student[]>(
          "http://localhost:8081/students"
        );
        setStudents(res.data);
        setOpenForm(false);
      } catch (err) {
        alert("Lỗi khi cập nhật học sinh!");
      }
    } else {
      try {
        const res = await axios.post("http://localhost:8081/students", {
          name: data.name,
          age: data.age,
          grade: data.grade,
        });
        setStudents((prev) => [res.data, ...prev]);
        setOpenForm(false);
      } catch (err) {
        alert("Lỗi khi thêm học sinh!");
      }
    }
  };

  const handleEdit = (s: Student) => {
    setEditing(s);
    setOpenForm(true);
  };
  const handleConfirmDelete = async () => {
    if (deleteTask) {
      try {
        await axios.delete(`http://localhost:8081/students/${deleteTask.id}`);
        setStudents((prev) => prev.filter((t) => t.id !== deleteTask.id));
      } catch (err) {
        alert("Lỗi khi xóa học sinh!");
      }
      setOpenDelete(false);
      setDeleteTask(null);
    }
  };

  const handleDelete = (id: number) => {
    const student = students.find((s) => s.id === id);
    if (student) {
      setDeleteTask(student);
      setOpenDelete(true);
    }
  };

  const handleClearFilters = () => {
    setSearch("");
    setGradeFilter("all");
    setSortBy("name");
    setSortDir("asc");
  };

  // Selector logic: apply search, filter, sort
  const filteredSorted = useMemo(() => {
    let out = students.slice();

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }

    if (gradeFilter !== "all") {
      out = out.filter((s) => s.grade === gradeFilter);
    }

    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.age - b.age;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {loading && <LoadingOverlay />}
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        grades={grades}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        <StudentList
          students={filteredSorted}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        students={students}
      />
      {/* Delete confirmation dialog */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Xác nhận xóa học sinh</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa học sinh "{deleteTask?.name}" không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)} color="primary">
            Hủy
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
