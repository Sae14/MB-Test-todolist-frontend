import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: null,
  },
  reducers: {
    setTodosData: (state, { payload }) => {
      state.todos = payload
        .sort(
          (a, b) =>
            new Date(a.updatedAt).valueOf() - new Date(b.updatedAt).valueOf()
        )
        .sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        )
        .sort((a, b) => a.state - b.state);
    },
  },
});

export const { setTodosData } = todoSlice.actions;

export default todoSlice.reducer;
