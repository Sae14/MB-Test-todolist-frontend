import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: null,
  },
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
