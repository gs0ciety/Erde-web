import { useSelector } from "react-redux";
import "./Content.css";
import { State } from "../../Store/Store";
import GameMode from "../../Interfaces/GameModeInterface";
import Game from "../../Interfaces/GameInterface";

export default function Content() {
  const activeGameMode: GameMode = useSelector(
    (state: State) => state.gameMode.gameMode
  );
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  function gameSwitch(activeGameMode: GameMode) {
    switch (activeGameMode.name) {
      default:
      case "shape":
        return (
          <div>
            <p>{gameData.question.name}</p>
            {gameData.options.map((option) => (
              <p>{option.name}</p>
            ))}
          </div>
        );

      case "flag":
        return activeGameMode.name;
      case "name":
        return activeGameMode.name;
    }
  }

  return (
    <div className="content">
      <h1>{gameSwitch(activeGameMode)}</h1>
    </div>
  );
}
