import { combineReducers, configureStore } from "@reduxjs/toolkit";
//reducers
import gameModeSlice from "../Slices/GameModeSlice";
import GameGeneratorSlice from "../Slices/GameGeneratorSlice";
import VictoryStatusSlice from "../Slices/VictoryStatusSlice";

const reducer = combineReducers({
  gameMode: gameModeSlice,
  gameGenerator: GameGeneratorSlice,
  victoryStatus: VictoryStatusSlice,
});

export const store = configureStore({ reducer });

export type State = ReturnType<typeof reducer>;
