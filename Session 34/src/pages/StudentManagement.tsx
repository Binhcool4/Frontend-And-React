import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/studentStore";
import {
  addStudent,
  updateStudent,
  deleteStudent,
  setStudents,
} from "../redux/studentStore";
import { useState } from "react";

const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    dispatch(addStudent(student));
  };

  const handleEditStudent = (student: Student) => {
    setEditing(student);
  };

  const handleUpdateStudent = (student: Student) => {
    dispatch(updateStudent(student));
    setEditing(null);
  };

  const handleSearch = (keyword: string) => {
    dispatch(
      setStudents(
        (students as Student[]).filter((s) =>
          s.name.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    );
  };

  const handleDeleteStudent = (id: string) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList
          students={students}
          onDelete={handleDeleteStudent}
          onEdit={handleEditStudent}
        />
      </div>
      <StudentForm
        onSubmit={editing ? handleUpdateStudent : handleAddStudent}
        students={students}
        editing={editing}
        setEditing={setEditing}
      />
    </div>
  );
};

export default StudentManagement;
