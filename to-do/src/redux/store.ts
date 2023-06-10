import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  userData: userDataReducer,
});

const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export default store;
