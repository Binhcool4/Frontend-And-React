import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface Props {
  search: string;
  gradeFilter: string;
  sortBy: "name" | "age";
  sortDir: "asc" | "desc";
  grades: string[];
  onSearchChange: (s: string) => void;
  onGradeChange: (g: string) => void;
  onSortChange: (by: "name" | "age", dir: "asc" | "desc") => void;
  onClear: () => void;
}

function StudentSearchSortFilter({
  search,
  gradeFilter,
  sortBy,
  sortDir,
  grades,
  onSearchChange,
  onGradeChange,
  onSortChange,
  onClear,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <TextField
        label="Tìm theo tên"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
        size="small"
      />

      <FormControl size="small" className="w-40">
        <InputLabel>Grade</InputLabel>
        <Select
          value={gradeFilter}
          label="Grade"
          onChange={(e) => onGradeChange(e.target.value)}
        >
          <MenuItem value="all">Tất cả</MenuItem>
          {grades.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" className="w-36">
        <InputLabel>Sắp xếp</InputLabel>
        <Select
          value={`${sortBy}_${sortDir}`}
          label="Sắp xếp"
          onChange={(e) => {
            const [by, dir] = (e.target.value as string).split("_");
            onSortChange(by as "name" | "age", dir as "asc" | "desc");
          }}
        >
          <MenuItem value="name_asc">Name A → Z</MenuItem>
          <MenuItem value="name_desc">Name Z → A</MenuItem>
          <MenuItem value="age_asc">Age ↑</MenuItem>
          <MenuItem value="age_desc">Age ↓</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={onClear} variant="outlined" className="ml-auto">
        Clear
      </Button>
    </div>
  );
}

export default StudentSearchSortFilter;
