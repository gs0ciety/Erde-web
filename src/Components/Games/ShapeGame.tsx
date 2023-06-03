import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";

export const ShapeGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  return (
    <div>
      <img src={gameData.question.shape} />
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
