import { createSlice } from "@reduxjs/toolkit";
import Option from "../Interfaces/OptionInterface";

const gameGeneratorSlice = createSlice({
  name: "gameGenerator",
  initialState: {
    gameGenerator: { question: {} as Option, options: [] as Option[] },
  },
  reducers: {
    newGame: (state, action) => {
      state.gameGenerator = action.payload;
    },
  },
});

export const { newGame } = gameGeneratorSlice.actions;
export default gameGeneratorSlice.reducer;
