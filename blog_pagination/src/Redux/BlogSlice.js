import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBlogs = createAsyncThunk('blog/getBlogs', async ({ page, rowPerPage }) => {
  console.log("page,rowPerPage");
  console.log(page, rowPerPage);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${rowPerPage}`)
  console.log("data", response.data);
  return response.data
})

export const getBlogByID = createAsyncThunk('blog/getBlogByID', async ({ id }) => {
  console.log("getBlogByID", id);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  console.log("data", response.data);
  return response.data
})

export const getBlogComment = createAsyncThunk('blog/getBlogComment', async ({ id }) => {
  console.log("id", id);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  console.log("comments", response.data);
  return response.data
})
export const deletePost = createAsyncThunk('blog/deletePost', async ({ id }) => {
  console.log("id", id);
  const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  console.log("comments", response.data);
  return response.data
})
export const updateBlog = createAsyncThunk('blog/updateBlog', async (BlogData) => {
  console.log("data slice", BlogData);
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${BlogData.id}`, BlogData)
  console.log("comments", response.data);
  return response.data
})


export const blogSlice = createSlice({
  name: 'blog',
  initialState: { blog: [] },
  extraReducers: {
    [getBlogs.fulfilled]: (state, action) => {
      state.blog = action.payload
    },
    [getBlogByID.fulfilled]: (state, action) => {
      state.blogByID = action.payload
    },
    [getBlogComment.fulfilled]: (state, action) => {
      state.blogComments = action.payload
    },
    [updateBlog.fulfilled]: (state, action) => {},
    [deletePost.fulfilled]: (state, action) => {},
    
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = blogSlice.actions
export default blogSlice.reducer