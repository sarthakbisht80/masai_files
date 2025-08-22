import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Async thunk to fetch posts

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
 try {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     return response.json();
 } catch (error) {
  console.log("error ",error);
 }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
