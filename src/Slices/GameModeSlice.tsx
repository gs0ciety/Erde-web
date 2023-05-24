import { createSlice } from "@reduxjs/toolkit";
import { GameMode } from "../Utils/GameMode";

const gameModeSlice = createSlice({
  name: "gameMode",
  initialState: { gameMode: GameMode[0] },
  reducers: {
    changeGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
  },
});

export const { changeGameMode } = gameModeSlice.actions;
export default gameModeSlice.reducer;
