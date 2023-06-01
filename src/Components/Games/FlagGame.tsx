import { Dispatch } from "@reduxjs/toolkit";
import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";

export const FlagGame: React.FC<{ gameData: Game; dispatch: Dispatch }> = ({
  gameData,
  dispatch,
}) => {
  return (
    <div>
      <img src={gameData.question.flag} />
      {gameData.options.map((option: Option) => (
        <p
          key={option.id}
          onClick={() =>
            checkAnswer(gameData.question.name, option.name, dispatch)
          }
        >
          {option.name}
        </p>
      ))}
    </div>
  );
};
