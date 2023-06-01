import { useDispatch, useSelector } from "react-redux";
import "./Content.css";
import { State } from "../../Store/Store";
import GameMode from "../../Interfaces/GameModeInterface";
import Game from "../../Interfaces/GameInterface";
import { CapitalGame } from "../Games/CapitalGame";
import { FlagGame } from "../Games/FlagGame";
import { ShapeGame } from "../Games/ShapeGame";
import { NameGame } from "../Games/NameGame";

export default function Content() {
  const activeGameMode: GameMode = useSelector(
    (state: State) => state.gameMode.gameMode
  );
  const gameData: Game = useSelector(
    (state: State) => state.gameGenerator.gameGenerator
  );

  const dispatch = useDispatch();

  function gameSwitch(activeGameMode: GameMode) {
    switch (activeGameMode.name) {
      default:
      case "capital":
        return <CapitalGame gameData={gameData} dispatch={dispatch} />;
      case "flag":
        return <FlagGame gameData={gameData} dispatch={dispatch} />;
      case "shape":
        return <ShapeGame gameData={gameData} dispatch={dispatch} />;
      case "name":
        return <NameGame gameData={gameData} dispatch={dispatch} />;
    }
  }

  return (
    <div className="content">
      <h1>{gameSwitch(activeGameMode)}</h1>
    </div>
  );
}
