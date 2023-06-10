import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

interface dateState {
  date: string;
}

const initialState: dateState = {
  date: formattedDate,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export default dateSlice.reducer;
