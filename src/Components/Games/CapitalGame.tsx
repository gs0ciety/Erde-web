import Option from "../../Interfaces/OptionInterface";
import { checkAnswer } from "../../Utils/GameUtils";
import Game from "../../Interfaces/GameInterface";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store/Store";
import { Snackbar } from "../Snackbar/Snackbar";

import animationData from "../Lottie/animation_success.json";

//styles
import "./Game.css";
import { useLottie } from "lottie-react";

export const CapitalGame: React.FC = () => {
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const victoryStatus = useSelector(
    (state: State) => state.victoryStatus.victoryStatus
  );

  const options = {
    animationData: animationData,
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View, play } = useLottie(options);

  const dispatch = useDispatch();

  return (
    <div className="capital-game">
      <div className="question-wrapper">
        <div className="question">{gameData.question.name.toUpperCase()}</div>
      </div>
      <div className="options-wrapper">
        {gameData.options.map((option: Option) => (
          <div className="option">
            <p
              className={option.isActiveOption ? "show" : "hide"}
              key={option.id}
              onClick={() =>
                checkAnswer(gameData.question.name, option.name, dispatch)
              }
            >
              {option.capital.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      {victoryStatus.showLottie && <div className="lottie"></div>}
      <div className="lottie">{View}</div>
      {victoryStatus.showSnackbar && <Snackbar />}
    </div>
  );
};
