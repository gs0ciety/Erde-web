import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";

//styles
import "./Game.css";
import "./FlagGame.css";

export const FlagGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  return (
    <div className="flag-game">
      <div className="question-wrapper">
        <img className="question-flag" src={gameData.question.flag} />
      </div>
      <div className="options-wrapper">
        {gameData.options.map((option: Option) => (
          <div className="option">
            <p
              key={option.id}
              onClick={() =>
                checkAnswer(gameData.question.name, option.name, dispatch)
              }
            >
              {option.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
