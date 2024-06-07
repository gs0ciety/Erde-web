import { createSlice } from "@reduxjs/toolkit";

interface VictoryStatusState {
  victoryStatus: {
    showSnackbar: boolean;
    isCorrect: boolean;
    showLottie: boolean;
  };
}

const initialState: VictoryStatusState = {
  victoryStatus: {
    showSnackbar: false,
    isCorrect: false,
    showLottie: false,
  },
};

const victoryStatusSlice = createSlice({
  name: "victoryStatus",
  initialState,
  reducers: {
    changeVictoryStatus: (state, action) => {
      state.victoryStatus = action.payload;
    },
  },
});

export const { changeVictoryStatus } = victoryStatusSlice.actions;
export default victoryStatusSlice.reducer;
