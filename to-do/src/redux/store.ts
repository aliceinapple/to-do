import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import createToDosReducer from "./todoSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  userData: userDataReducer,
  todos: createToDosReducer,
});

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    todos: createToDosReducer,
  },
});

export default store;
