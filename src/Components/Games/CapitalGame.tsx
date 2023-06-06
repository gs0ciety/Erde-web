import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";
import { Snackbar } from "../Snackbar/Snackbar";

import "./Game.css";

export const CapitalGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  return (
    <div>
      <p>{gameData.question.name}</p>
      {gameData.options.map((option: Option) => (
        <p
          className={option.isActiveOption ? "show" : "hide"}
          key={option.id}
          onClick={() =>
            checkAnswer(gameData.question.name, option.name, dispatch)
          }
        >
          {option.capital}
        </p>
      ))}
      <div>
        <Snackbar />
      </div>
    </div>
  );
};
