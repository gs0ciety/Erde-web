import { Dispatch } from "@reduxjs/toolkit";
import { fetchGameData } from "../API/GameAPI";
import { newGame } from "../Slices/GameGeneratorSlice";

async function correctAnswer(dispatch: Dispatch, questionName: string) {
  let newGameData;

  //generate a newgame avoiding generating with the same question as the one last used
  do {
    newGameData = await fetchGameData();
  } while (newGameData.question.name === questionName);

  dispatch(newGame(newGameData));
}

export function checkAnswer(
  questionName: string,
  answerName: string,
  dispatch: Dispatch
) {
  if (questionName === answerName) {
    //right answer
    console.log("CORRECT");
    correctAnswer(dispatch, questionName);
  } else {
    //wrong anwer
    console.log("WRONG");
  }
}
