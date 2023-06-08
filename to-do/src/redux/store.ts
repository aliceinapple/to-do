import { combineReducers, configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {},
});

export default store;
