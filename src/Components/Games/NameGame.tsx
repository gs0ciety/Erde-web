import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";
import { Snackbar } from "../Snackbar/Snackbar";
import Lottie from "lottie-react";
import animationData from "../Lottie/animation_success.json";
import useSound from "use-sound";

//styles
import "./Game.css";
import "./NameGame.css";

export const NameGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const victoryStatus = useSelector(
    (state: State) => state.victoryStatus.victoryStatus
  );

  const [playVictorySound] = useSound("/sounds/drums_success.mp3");

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
              className={
                option.isActiveOption ? "option-flag show" : "option-flag hide"
              }
              src={option.flag}
              key={option.id}
              onClick={() =>
                checkAnswer(
                  gameData.question.name,
                  option.name,
                  dispatch,
                  playVictorySound
                )
              }
            />
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
