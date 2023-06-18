import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";

//style
import "./Game.css";
import "./ShapeGame.css";

export const ShapeGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  return (
    <div className="shape-game">
      <div className="question-wrapper">
        <img className="question-shape" src={gameData.question.shape} />
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
              {option.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
