import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import type { Book } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: number;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => void;
  books: Book[];
}

function BookForm({ open, initial = {}, onClose, onSubmit, books }: Props) {
  const [title, setTitle] = useState(initial.title ?? "");
  const [author, setAuthor] = useState(initial.author ?? "");
  const [year, setYear] = useState(initial.year ?? new Date().getFullYear());
  const [category, setCategory] = useState(initial.category ?? "");
  const [errors, setErrors] = useState<{
    title?: string;
    author?: string;
    year?: string;
    category?: string;
  }>({});
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(initial.title ?? "");
    setAuthor(initial.author ?? "");
    setYear(initial.year ?? new Date().getFullYear());
    setCategory(initial.category ?? "");
    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 100);
  }, [initial, open]);

  const validate = () => {
    const newErrors: {
      title?: string;
      author?: string;
      year?: string;
      category?: string;
    } = {};

    if (!title.trim()) {
      newErrors.title = "Tên sách không được phép để trống";
    } else {
      const normalizedTitle = title.trim().toLowerCase();
      const isDuplicate = books.some(
        (book) =>
          book.title.trim().toLowerCase() === normalizedTitle &&
          book.id !== initial.id
      );
      if (isDuplicate) {
        newErrors.title = "Tên sách không được phép trùng";
      }
    }

    if (!author.trim()) {
      newErrors.author = "Tên tác giả không được phép để trống";
    }

    if (
      year === undefined ||
      year === null ||
      Number.isNaN(year) ||
      year === 0
    ) {
      newErrors.year = "Năm xuất bản không được bỏ trống";
    } else if (year < 1) {
      newErrors.year = "Năm xuất bản không được nhỏ hơn 1";
    }

    if (!category.trim()) {
      newErrors.category = "Tên thể loại không được để trống";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: initial.id,
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      category: category.trim(),
    });
    setTitle("");
    setAuthor("");
    setYear(new Date().getFullYear());
    setCategory("");
    setErrors({});
    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 100);
    onClose();
  };

  const handleClose = () => {
    setTitle(initial.title ?? "");
    setAuthor(initial.author ?? "");
    setYear(initial.year ?? new Date().getFullYear());
    setCategory(initial.category ?? "");
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label={errors.title ? errors.title : "Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            inputRef={titleInputRef}
            error={!!errors.title}
            autoFocus
          />
          <TextField
            label={errors.author ? errors.author : "Author"}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            error={!!errors.author}
          />
          <TextField
            label={errors.year ? errors.year : "Year"}
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            fullWidth
            error={!!errors.year}
            inputProps={{ min: 1 }}
          />
          <TextField
            label={errors.category ? errors.category : "Category"}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            error={!!errors.category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;
