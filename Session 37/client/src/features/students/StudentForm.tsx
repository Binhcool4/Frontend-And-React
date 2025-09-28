import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import type { FormEvent } from "react";

import type { Student } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
  onSubmit: (data: {
    id?: number;
    name: string;
    age: number;
    grade: string;
  }) => void;
  students?: Student[];
}

function StudentForm({
  open,
  initial = {},
  onClose,
  onSubmit,
  students = [],
}: Props) {
  
  const [name, setName] = useState(initial.name ?? "");
  const [age, setAge] = useState(initial.age ?? 16);
  const [grade, setGrade] = useState(initial.grade ?? "");
  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    grade?: string;
  }>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setName(initial.name ?? "");
    setAge(initial.age ?? 16);
    setGrade(initial.grade ?? "");
    setErrors({});
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);
  }, [initial, open]);
  const validate = () => {
    const newErrors: { name?: string; age?: string; grade?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Name Không được bỏ trống";
    } else {
      const normalized = name.trim().toLowerCase();
      const isDuplicate = students.some(
        (s) => s.name.trim().toLowerCase() === normalized && s.id !== initial.id
      );
      if (isDuplicate) {
        newErrors.name = "Name không được trùng";
      }
    }
    if (age === undefined || age === null || Number.isNaN(age)) {
      newErrors.age = "Age Không được bỏ trống";
    } else if (age < 1) {
      newErrors.age = "Age phải lớn hơn 0";
    }
    if (!grade.trim()) {
      newErrors.grade = "Grade Không được bỏ trống";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.age && !newErrors.grade;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: initial.id,
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });
    setName("");
    setAge(16);
    setGrade("");
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Student" : "Add Student"}</DialogTitle>

        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label={errors.name ? errors.name : "Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            inputRef={nameInputRef}
            error={!!errors.name}
            autoFocus
          />
          <TextField
            label={errors.age ? errors.age : "Age"}
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            label={errors.grade ? errors.grade : "Grade"}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
            error={!!errors.grade}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default StudentForm;
