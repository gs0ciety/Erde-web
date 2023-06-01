import { combineReducers, configureStore } from "@reduxjs/toolkit";
//reducers
import gameModeSlice from "../Slices/GameModeSlice";
import GameGeneratorSlice from "../Slices/GameGeneratorSlice";

const reducer = combineReducers({
  gameMode: gameModeSlice,
  gameGenerator: GameGeneratorSlice,
});

export const store = configureStore({ reducer });

export type State = ReturnType<typeof reducer>;
