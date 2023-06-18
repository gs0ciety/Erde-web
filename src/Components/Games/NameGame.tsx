import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";

//styles
import "./Game.css";
import "./NameGame.css";

export const NameGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  return (
    <div className="name-game">
      <div className="question-wrapper">
        <p className="question">{gameData.question.name.toUpperCase()}</p>
      </div>
      <div className="options-wrapper">
        {gameData.options.map((option: Option) => (
          <div className="option">
            <img
              className="option-flag"
              src={option.flag}
              key={option.id}
              onClick={() =>
                checkAnswer(gameData.question.name, option.name, dispatch)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
