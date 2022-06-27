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

    editTodo: (state, { payload }) => {
      state.todos = state.todos
        .map((todo) => {
          if (todo.id === payload.id) {
            todo.state = payload.state;
          }
          return todo;
        })
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

export const { setTodosData, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
