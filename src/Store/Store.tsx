import { combineReducers, configureStore } from "@reduxjs/toolkit";
//reducers
import gameMode from "../Slices/GameModeSlice";
import gameGenerator from "../Slices/GameGeneratorSlice";

const reducer = combineReducers({
  gameMode,
  gameGenerator,
});

export const store = configureStore({ reducer });

export type State = ReturnType<typeof reducer>;
