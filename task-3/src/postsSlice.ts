import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: Post[] = [];

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data: Post[] = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{ userId: number; title: string; body: string }>
    ) => {
      const newPost: Post = {
        userId: action.payload.userId,
        id: state.length + 1,
        title: action.payload.title,
        body: action.payload.body,
      };
      state.unshift(newPost);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
