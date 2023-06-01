import { createSlice } from "@reduxjs/toolkit";
import Option from "../Interfaces/OptionInterface";

interface GameGeneratorState {
  gameGenerator: {
    question: Option;
    options: Option[];
  };
}

const emptyQuestion = {
  id: 0,
  name: "",
  capital: "",
  continent: "",
  translations: {},
  flag: "",
  shape: "",
  isActiveOption: true,
};

const initialState: GameGeneratorState = {
  gameGenerator: {
    question: emptyQuestion,
    options: [],
  },
};

const gameGeneratorSlice = createSlice({
  name: "gameGenerator",
  initialState,
  reducers: {
    newGame: (state, action) => {
      state.gameGenerator = action.payload;
    },
  },
});

export const { newGame } = gameGeneratorSlice.actions;
export default gameGeneratorSlice.reducer;
