import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
  updateTodoCompletion,
} from "./todoThunk";

export interface ToDoState {
  value: { id: number; title: string; isCompleted: boolean }[];
}

const initialState: ToDoState = {
  value: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(updateTodoCompletion.fulfilled, (state, action) => {
      const todoId = action.meta.arg;
      const todoIndex = state.value.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        state.value[todoIndex].isCompleted =
          !state.value[todoIndex].isCompleted;
      }
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const deletedTodo = action.payload;
      state.value = state.value.filter((todo) => todo.id !== deletedTodo.id);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const updatedTodo = action.payload;
      const index = state.value.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.value[index] = updatedTodo;
      }
    });
  },
});

export default todosSlice.reducer;
