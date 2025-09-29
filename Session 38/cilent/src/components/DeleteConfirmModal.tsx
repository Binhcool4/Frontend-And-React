import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import type { Book } from "./types";

interface Props {
  open: boolean;
  book: Book | null;
  onCancel: () => void;
  onConfirm: () => void;
}

function DeleteConfirmModal({ open, book, onCancel, onConfirm }: Props) {
  if (!book) return null;

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete the book "{book.title}" by{" "}
          {book.author}?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmModal;
