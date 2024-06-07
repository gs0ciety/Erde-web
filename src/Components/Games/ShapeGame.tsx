import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import useSound from "use-sound";
import Lottie from "lottie-react";
import animationData from "../Lottie/animation_success.json";

//style
import "./Game.css";
import "./ShapeGame.css";
import { Snackbar } from "../Snackbar/Snackbar";

export const ShapeGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const victoryStatus = useSelector(
    (state: State) => state.victoryStatus.victoryStatus
  );

  const [playVictorySound] = useSound("assets/sounds/drums_success.mp3");

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
              className={option.isActiveOption ? "show" : "hide"}
              key={option.id}
              onClick={() =>
                checkAnswer(
                  gameData.question.name,
                  option.name,
                  dispatch,
                  playVictorySound
                )
              }
            >
              {option.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      {victoryStatus.showLottie && (
        <Lottie
          className="lottie"
          autoplay={true}
          animationData={animationData}
          loop={false}
        />
      )}
      {victoryStatus.showSnackbar && <Snackbar />}
    </div>
  );
};
