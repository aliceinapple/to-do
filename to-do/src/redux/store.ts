import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import createToDosReducer from "./todoSlice";
import dateReducer from "./dateSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  userData: userDataReducer,
  todos: createToDosReducer,
  date: dateReducer,
});

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    todos: createToDosReducer,
    date: dateReducer,
  },
});

export default store;
