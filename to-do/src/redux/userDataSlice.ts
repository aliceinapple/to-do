import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userDataState {
  age: number;
  gender: string;
  id: number;
  username: string;
  email: string;
}

const initialState: userDataState = {
  age: 0,
  gender: "",
  id: 0,
  username: "",
  email: "",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userDataState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
