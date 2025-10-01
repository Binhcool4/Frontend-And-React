import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Product = {
  id: string;
  code: string;
  name: string;
  price: number;
  image: string;
  status: boolean;
  categoryId: string;
};

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const res = await axios.get('http://localhost:3000/Products');
  return res.data;
});

export const addProduct = createAsyncThunk('products/add', async (product: Product) => {
  const res = await axios.post('http://localhost:3000/Products', product);
  return res.data;
});

export const updateProduct = createAsyncThunk('products/update', async (product: Product) => {
  const res = await axios.put(`http://localhost:3000/Products/${product.id}`, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id: string) => {
  await axios.delete(`http://localhost:3000/Products/${id}`);
  return id;
});

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.items = state.items.map((p) => (p.id === action.payload.id ? action.payload : p));
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
