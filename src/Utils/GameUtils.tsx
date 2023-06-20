import { Dispatch } from "@reduxjs/toolkit";
import { fetchGameData } from "../API/GameAPI";
import { newGame, wrongOptionSelected } from "../Slices/GameGeneratorSlice";
import { changeVictoryStatus } from "../Slices/VictoryStatusSlice";
import { result } from "./ResultData";
import Game from "../Interfaces/GameInterface";

async function correctAnswer(
  dispatch: Dispatch,
  questionName: string,
  playVictorySound
) {
  let newGameData: Game;

  //generate a newgame avoiding generating with the same question as the one last used
  do {
    newGameData = await fetchGameData();
  } while (newGameData.question.name === questionName);

  dispatch(changeVictoryStatus(result.correct.show));
  playVictorySound();

  setTimeout(() => {
    dispatch(changeVictoryStatus(result.correct.hide));
  }, 2000);

  setTimeout(() => {
    dispatch(newGame(newGameData));
  }, 2000);
}

function wrongAnswer(dispatch: Dispatch, optionName: string) {
  dispatch(changeVictoryStatus(result.incorrect.show));

  setTimeout(() => {
    dispatch(changeVictoryStatus(result.incorrect.hide));
  }, 2000);

  dispatch(wrongOptionSelected(optionName));
}

export function checkAnswer(
  questionName: string,
  answerName: string,
  dispatch: Dispatch,
  playVictorySound: void
) {
  if (questionName === answerName) {
    //right answer
    console.log("CORRECT");
    correctAnswer(dispatch, questionName, playVictorySound);
  } else {
    //wrong anwer
    console.log("WRONG");
    wrongAnswer(dispatch, answerName);
  }
}
