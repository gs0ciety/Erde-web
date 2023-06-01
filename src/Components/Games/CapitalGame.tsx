import { Dispatch } from "@reduxjs/toolkit";
import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";

export const CapitalGame: React.FC<{ gameData: Game; dispatch: Dispatch }> = ({
  gameData,
  dispatch,
}) => {
  return (
    <div>
      <p>{gameData.question.name}</p>
      {gameData.options.map((option: Option) => (
        <p
          key={option.id}
          onClick={() =>
            checkAnswer(gameData.question.name, option.name, dispatch)
          }
        >
          {option.capital}
        </p>
      ))}
    </div>
  );
};
