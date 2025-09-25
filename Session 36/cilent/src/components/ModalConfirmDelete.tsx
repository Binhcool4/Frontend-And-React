import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface ModalConfirmDeleteProps {
  open: boolean;
  taskName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalConfirmDelete = ({
  open,
  taskName,
  onClose,
  onConfirm,
}: ModalConfirmDeleteProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Xác nhận</span>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <InfoOutlinedIcon color="error" fontSize="large" />
        <Typography>
          Bạn có chắc chắn muốn xóa công việc <b>&lt;{taskName}&gt;</b> không?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Hủy
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmDelete;
