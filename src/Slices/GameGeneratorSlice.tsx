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
    wrongOptionSelected: (state, action) => {
      const wrongOptionName = action.payload;
      console.log(wrongOptionName);

      for (const country of state.gameGenerator.options) {
        if (country.name === wrongOptionName) {
          country.isActiveOption = false;
        }
      }
    },
  },
});

export const { newGame, wrongOptionSelected } = gameGeneratorSlice.actions;
export default gameGeneratorSlice.reducer;
