import { configureStore } from "@reduxjs/toolkit";
//reducers
import gameMode from "../Slices/GameModeSlice";

export const store = configureStore({ reducer: gameMode });

export type State = ReturnType<typeof gameMode>;
