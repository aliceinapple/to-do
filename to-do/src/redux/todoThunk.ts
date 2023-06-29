import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://todo-redev.herokuapp.com/api/todos";

const getToken = async () => {
  return localStorage.getItem("token");
};

const fetchApi = async (
  url = "",
  method = "GET",
  body: null | object = null
) => {
  const bodyObject = body && JSON.stringify(body);
  const token = await getToken();

  const response = await fetch(`${apiUrl}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: bodyObject,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();

  return data;
};

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await fetchApi();
      return todos;
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todoData: { title: string }, { rejectWithValue }) => {
    try {
      const createdTodo = await fetchApi("", "POST", todoData);
      return createdTodo;
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  }
);

export const updateTodoCompletion = createAsyncThunk(
  "todos/updateTodoCompletion",
  async (id: number, { rejectWithValue }) => {
    try {
      fetchApi(`/${id}/isCompleted`, "PATCH");
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue }) => {
    try {
      const deletedTodo = await fetchApi(`/${id}`, "DELETE");
      return deletedTodo;
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (data: { id: number; title: string }, { rejectWithValue }) => {
    const { id, title } = data;
    try {
      const updatedToDo = await fetchApi(`/${id}`, "PATCH", { title });
      return updatedToDo;
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  }
);
