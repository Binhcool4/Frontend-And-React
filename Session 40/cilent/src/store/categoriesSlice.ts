import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Category = {
  id: string;
  name: string;
  description: string;
  status: boolean;
};

export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const res = await axios.get('http://localhost:3000/Catergories');
  return res.data;
});

export const addCategory = createAsyncThunk('categories/add', async (category: Category) => {
  const res = await axios.post('http://localhost:3000/Catergories', category);
  return res.data;
});

export const updateCategory = createAsyncThunk('categories/update', async (category: Category) => {
  const res = await axios.put(`http://localhost:3000/Catergories/${category.id}`, category);
  return res.data;
});

export const deleteCategory = createAsyncThunk('categories/delete', async (id: string) => {
  await axios.delete(`http://localhost:3000/Catergories/${id}`);
  return id;
});

type CategoriesState = {
  items: Category[];
  loading: boolean;
  error: string | null;
};

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.items = state.items.map((c) => (c.id === action.payload.id ? action.payload : c));
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer;
