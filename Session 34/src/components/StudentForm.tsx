import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

import React from "react";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  students?: Student[];
  editing?: Student | null;
  setEditing?: (student: Student | null) => void;
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm = ({
  onSubmit,
  students = [],
  editing,
  setEditing,
}: StudentFormProps) => {
  const [form, setForm] = React.useState<
    Omit<Student, "age"> & { age: string }
  >({
    id: "",
    name: "",
    age: "",
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });
  React.useEffect(() => {
    if (editing) {
      setForm({
        ...editing,
        age: editing.age.toString(),
      });
    }
  }, [editing]);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const idRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const ageRef = React.useRef<HTMLInputElement>(null);
  const birthdayRef = React.useRef<HTMLInputElement>(null);
  const hometownRef = React.useRef<HTMLInputElement>(null);
  const addressRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.id) newErrors.id = "Mã sinh viên không được để trống";
    else if (
      students.some(
        (s) => s.id === form.id && (!editing || s.id !== editing.id)
      )
    )
      newErrors.id = "Mã sinh viên đã tồn tại";

    if (!form.name) newErrors.name = "Tên sinh viên không được để trống";
    else if (
      students.some(
        (s) => s.name === form.name && (!editing || s.id !== editing.id)
      )
    )
      newErrors.name = "Tên sinh viên đã tồn tại";

    if (
      form.age === undefined ||
      form.age === null ||
      form.age === "" ||
      isNaN(Number(form.age))
    ) {
      newErrors.age = "Tuổi không được để trống";
    } else if (Number(form.age) < 0) {
      newErrors.age = "Tuổi không được nhỏ hơn 0";
    }

    if (!form.birthday) newErrors.birthday = "Ngày sinh không được để trống";
    else {
      const today = new Date();
      const birth = new Date(form.birthday);
      if (birth > today)
        newErrors.birthday = "Ngày sinh không được là ngày trong tương lai";
    }

    if (!form.hometown) newErrors.hometown = "Nơi sinh không được để trống";
    if (!form.address) newErrors.address = "Địa chỉ không được để trống";
    return newErrors;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Focus first error field
      if (newErrors.id && idRef.current) idRef.current.focus();
      else if (newErrors.name && nameRef.current) nameRef.current.focus();
      else if (newErrors.age && ageRef.current) ageRef.current.focus();
      else if (newErrors.birthday && birthdayRef.current)
        birthdayRef.current.focus();
      else if (newErrors.hometown && hometownRef.current)
        hometownRef.current.focus();
      else if (newErrors.address && addressRef.current)
        addressRef.current.focus();
      return;
    }
    // Chuyển age về number khi submit
    onSubmit({ ...form, age: Number(form.age) } as Student);
    setForm({
      id: "",
      name: "",
      age: "",
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
    if (setEditing) setEditing(null);
    setTimeout(() => {
      if (idRef.current) idRef.current.focus();
    }, 0);
  };

  return (
    <form
      className="w-1/3 p-4 border rounded-xl shadow"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label={errors.id || "Mã sinh viên"}
          name="id"
          value={form.id}
          onChange={handleChange}
          error={!!errors.id}
          inputRef={idRef}
          fullWidth
        />
        <TextField
          label={errors.name || "Tên sinh viên"}
          name="name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          inputRef={nameRef}
          fullWidth
        />
        <TextField
          label={errors.age || "Tuổi"}
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          error={!!errors.age}
          inputRef={ageRef}
          fullWidth
          inputProps={{ min: 0 }}
        />
        <Select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label={errors.birthday || "Ngày sinh"}
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          error={!!errors.birthday}
          inputRef={birthdayRef}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={errors.hometown || "Nơi sinh"}
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          error={!!errors.hometown}
          inputRef={hometownRef}
          fullWidth
        />
        <TextField
          label={errors.address || "Địa chỉ"}
          name="address"
          value={form.address}
          onChange={handleChange}
          error={!!errors.address}
          inputRef={addressRef}
          fullWidth
        />
        <div className="flex gap-2">
          <Button variant="contained" color="primary" type="submit">
            {editing ? "Cập nhật" : "SUBMIT"}
          </Button>
          {editing && (
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={() => {
                setForm({
                  id: "",
                  name: "",
                  age: "",
                  gender: "Nam",
                  birthday: "",
                  hometown: "",
                  address: "",
                });
                if (setEditing) setEditing(null);
                setTimeout(() => {
                  if (idRef.current) idRef.current.focus();
                }, 0);
              }}
            >
              Hủy
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
