import { createSlice } from "@reduxjs/toolkit";

type ViewMode = "list" | "grid";

interface ViewModeState {
  currentViewMode: ViewMode;
  data: Array<{
    id: number;
    title: string;
  }>;
}

const initialState: ViewModeState = {
  currentViewMode: "list",
  data: [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
  ],
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.currentViewMode = action.payload;
    },
  },
});

export const { setViewMode} = viewModeSlice.actions;
export default viewModeSlice.reducer;