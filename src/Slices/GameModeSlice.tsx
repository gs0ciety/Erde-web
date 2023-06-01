import { createSlice } from "@reduxjs/toolkit";
import { GameModeData } from "../Utils/GameMode";

const initialState = { gameMode: GameModeData[0] };

const gameModeSlice = createSlice({
  name: "gameMode",
  initialState,
  reducers: {
    changeGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
  },
});

export const { changeGameMode } = gameModeSlice.actions;
export default gameModeSlice.reducer;
